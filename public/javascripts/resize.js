var resizeState = {
    create: function () {
        var welcome = game.add.text((game.width*10)/100, (game.height*10)/100, 'UnPlayable window size.\nResize your window\nand refresh', {
            font: '15px Arial', fill: '#ffffff'
        });
    }
};