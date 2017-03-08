var enemyWinState = {
    create: function () {
        console.log('enemyWin');

        socket.emit('closeConnection', {clientId : clientId, roomNo : roomNo});

        var winLabel = game.add.text((game.width*10)/100, (game.height*20)/100, 'You lost against ' + enemyName, {
            font: '30px Arial', fill: '#00FF00'
        });


        var startLabel = game.add.text((game.width*10)/100, (game.height*80)/100, 'Press up key to restart', {
            font: '15px Arial', fill: '#ffffff'
        });

        var upkey = game.input.keyboard.addKey(Phaser.Keyboard.UP);

        upkey.onDown.addOnce(this.restart, this);
    },
    restart : function () {
        game.state.start('menu');
    }
};