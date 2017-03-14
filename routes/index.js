module.exports = function (io) {
    var express = require('express');
    var router = express.Router();
    var mongoose = require('mongoose');
    mongoose.Promise = global.Promise;

    mongoose.connect('mongodb://localhost/sampleGame');
    var schema = mongoose.Schema;


    var leaderboardSchema = new schema({
        name : {type: String},
        time : {type: Number}
    });
    var leaderboard = mongoose.model('leaderboard', leaderboardSchema);

    /* GET home page. */
    var count = 0;
    router.get('/', function(req, res, next) {
        count = count + 1;
        res.render('index', { title: 'express', count : count });
    });

    io.on('connection', function (socket) {
        console.log(socket.id + ' is connected');

        var roomno = 1;
        socket.on('joinRoom', function (data) {
            if(io.nsps['/'].adapter.rooms["room-"+roomno] && io.nsps['/'].adapter.rooms["room-"+roomno].length > 1)
                roomno++;

            //socket.emit('clientData', { roomNo : roomno, clientId : data.clientId});
            socket.join("room-"+roomno);

            if(io.nsps['/'].adapter.rooms['room-'+roomno].length == 1)
                socket.emit('clientData', { roomNo : roomno, clientId : data.clientId,isFirst : true});
            else
                socket.emit('clientData', { roomNo : roomno, clientId : data.clientId,isFirst : false});

            if(io.nsps['/'].adapter.rooms['room-'+roomno].length == 1) io.sockets.in("room-"+roomno).emit('joinStatus', {state : false});
            else io.sockets.in("room-"+roomno).emit('joinStatus', {state : true});
        });

        socket.on('position1', function (data) {
            io.sockets.in("room-"+data.roomNo).emit('enemyPos', {p1: true, xPosition : data.xPercent, yPosition : data.yPercent});
        });
        socket.on('position2', function (data) {
            io.sockets.in("room-"+data.roomNo).emit('enemyPos', {p1: false, xPosition : data.xPercent, yPosition : data.yPercent});
        });

        socket.on('win1', function (data) {
            io.sockets.in("room-"+data.roomNo).emit('whoWin', {p1: true, xPosition : data.xPercent});
        });
        socket.on('win2', function (data) {
            io.sockets.in("room-"+data.roomNo).emit('whoWin', {p1: false, xPosition : data.xPercent});
        });


        socket.on('playerDetails', function (data) {
            io.sockets.in("room-"+data.roomNo).emit('enemyName', {
                clientId: data.clientId,
                name : data.myName,
                vehicleName: data.vehicleName,
                VehicleSprite: data.VehicleSprite
            });
        });

        var resultArray = [];
        var tempArray = [];
        socket.on('reqLB', function (data) {
            leaderboard.find({}, function (err, result) {
                tempArray = result.sort( function(a,b){ return a.time - b.time } );
                for(var i = 0; i < tempArray.length; i++){
                    resultArray.push({ name : tempArray[i].name, time : tempArray[i].time});
                }
                socket.emit('getLeaderboard', resultArray);
            });
        });

        socket.on('setLeaderboard', function (data) {
            var addName = new leaderboard({
                name : data.playerWon,
                time : data.time
            });
            addName.save(function (err, name) {
                if(err) console.log(err);
                else console.log('done');
            });
        });

        socket.on('closeConnection', function (data) {
            socket.leave("room-"+data.roomNo);
        });

        socket.on('disconnect', function () {
            console.log(socket.id + 'has left');
        });
    });

    return router;
};