var playerWinState = {
    create: function () {
        console.log('playerWin');
        socket.emit('closeConnection', {clientId : clientId, roomNo : roomNo});

        var winLabel = game.add.text((game.width*10)/100, (game.height*20)/100, 'You Won against ' + enemyName, {
            font: '30px Arial', fill: '#00FF00'
        });

        restart = game.add.button((game.width*20)/100, (game.height*80)/100, 'restartButton', this.restart);
        restart.scale.setTo(0.1, 0.1);
        game.physics.enable(restart, Phaser.Physics.ARCADE);

        leaderboardbtn = game.add.button((game.width*80)/100, (game.height*75)/100, 'leaderboardButton', this.disLeaderboard);
        leaderboardbtn.scale.setTo(0.07, 0.07);
        game.physics.enable(leaderboardbtn, Phaser.Physics.ARCADE);
    },
    restart: function () {
        game.state.start('menu');
    },
    disLeaderboard: function () {
        game.state.start('leaderboard');
    }
};