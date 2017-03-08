var joinState = {
    create: function () {

        console.log('join');
        socket = io();


        socket.on('connect', function () {
            socket.emit('joinRoom', {clientId : socket.id});
        });

        countdowntext = game.add.text((game.width*10)/100, (game.height*40)/100, '', {
            font: '30px Arial', fill: '#ffffff'
        });

        playWith = game.add.text((game.width*10)/100, (game.height*50)/100, '', {
            font: '30px Arial', fill: '#ffffff'
        });

        clientId = '';
        roomNo = '';
        isFirst = true;
        socket.on('clientData', function (data) {
            clientId = data.clientId;
            roomNo = data.roomNo;
            isFirst = data.isFirst;
        });
        time_count = 0;
        startGame = false;
        enemyName = '';

        var waitText = game.add.text((game.width*10)/100, (game.height*20)/100, '', {
            font: '30px Arial', fill: '#ffffff'});

        socket.on('joinStatus', function (data) {
            if(name != data.name) enemyName = data.name;
            if(data.state) {
                waitText.text = '';
                socket.emit('playerDetails', {
                    clientId : clientId,
                    roomNo : roomNo,
                    myName : name,
                    vehicleName: playerVehicle,
                    VehicleSprite: playerVehicleSprite
                });
            }
            else waitText.text = 'waiting for other player to join';
        });

        dude = game.add.sprite((game.width*10)/100, (game.height*50)/100, 'vehicle', playerVehicleSprite);
        game.physics.enable(dude, Phaser.Physics.ARCADE);
        dude.body.bounce.y = 0.2;
        dude.body.gravity.y = 600;
        dude.body.collideWorldBounds = true;

        var grd = game.add.bitmapData(game.width, 0);
        grd.fill(0, 0, 0, 0);
        ground_line = game.add.sprite(0, (game.height*78)/100, grd);
        game.physics.enable(ground_line, Phaser.Physics.ARCADE);
        ground_line.body.immovable = true;

        socket.on('enemyName', function (data) {
            if(clientId != data.clientId) {

                opp = game.add.sprite((game.width*30)/100, (game.height*50)/100, 'vehicle', data.VehicleSprite);
                game.physics.enable(opp, Phaser.Physics.ARCADE);
                opp.body.bounce.y = 0.2;
                opp.body.gravity.y = 600;
                opp.body.collideWorldBounds = true;

                enemyName = data.name;
                enemyVehicle = data.vehicleName;
                enemyVehicleSprite = data.VehicleSprite;
                startGame = true;
            }
        });
    },
    update: function () {

        game.physics.arcade.collide(dude, ground_line);

        if(startGame){
            game.physics.arcade.collide(opp, ground_line);

            playWith.text = name + ' vs ' + enemyName;
            if(time_count/60 == 0) countdowntext.text = 'game starts in 3 seconds';
            else if(time_count/60 == 1) countdowntext.text = 'game starts in 2 seconds';
            else if(time_count/60 == 2) countdowntext.text = 'game starts in 1 seconds';
            else if(time_count/60 == 3) game.state.start('desktopPlay');
            time_count++;
        }
    }
};