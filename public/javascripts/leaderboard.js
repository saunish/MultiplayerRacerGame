var leaderboardState = {
    create : function () {
        console.log('leaderboard');

        loadingLable = game.add.text((game.width*10)/100, (game.height*10)/100, 'Leaderboard',{
            font : '30px Courier', fill: '#ffffff'});

        socket.emit('reqLB', {roomNo : roomNo, clientId: clientId});

        socket.on('getLeaderboard', function (data) {
            game.add.text((game.width*10)/100, (game.height*20)/100, '\t\tserNo\t\t\tName\t\t\tTime',{
                font : '12px Courier', fill: '#ffffff'});
            var lbHeight = 22;
            for(var i = 0; i < data.length; i++ ){
                if(i < 30){
                    game.add.text((game.width*10)/100, (game.height*lbHeight)/100, '\t\t  ' + i + '.\t\t\t' + data[i].name + '\t\t\t' + data[i].time,{
                        font : '12px Courier', fill: '#ffffff'});
                    lbHeight = lbHeight + 2;
                }
            }
        });

        restart = game.add.button((game.width*20)/100, (game.height*80)/100, 'restartButton', this.restart);
        restart.scale.setTo(0.1, 0.1);
        game.physics.enable(restart, Phaser.Physics.ARCADE);

        /*var startLabel = game.add.text((game.width*10)/100, (game.height*90)/100, 'Press up key to restart', {
            font: '15px Arial', fill: '#ffffff'
        });*/

        /*var upkey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        upkey.onDown.addOnce(this.restart, this);*/
    },
    restart: function () {
        game.state.start('menu');
    }
};