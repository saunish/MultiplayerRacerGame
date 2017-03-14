var loadState = {
    preload : function () {

        loadingLable = game.add.text(80, 150, 'loading...',{
            font : '30px Courier', fill: '#ffffff'});

        game.load.image('sky', 'assets/background/11_background.png');
        game.load.image('hill1', 'assets/background/05_hill1.png');
        game.load.image('hill2', 'assets/background/06_hill2.png');
        game.load.image('ground', 'assets/background/01_ground.png');
        game.load.image('bushes', 'assets/background/04_bushes.png');
        game.load.image('trees1', 'assets/background/03_distant_trees.png');
        game.load.image('trees2', 'assets/background/02_trees and bushes.png');
        game.load.image('clouds2', 'assets/background/08_clouds.png');
        game.load.image('clouds1', 'assets/background/09_distant_clouds1.png');
        game.load.image('clouds', 'assets/background/10_distant_clouds.png');
        game.load.image('selector', 'assets/selector.png');
        game.load.image('trophy', 'assets/trophy.png');
        game.load.image('fullScreen', 'assets/fullScreen.png');
        game.load.image('playButton', 'assets/playButton.png');
        game.load.image('restartButton', 'assets/restart.png');
        game.load.image('leaderboardButton', 'assets/leaderboard.png');
        game.load.image('obstacle', 'assets/obstacle.png');
        game.load.atlas('control', 'assets/arrowKeys.png', 'assets/arrowKeys.json');
        game.load.atlas('vehicle', 'assets/charater/vehicle.png', 'assets/charater/vehicle.json');
    },
    create : function () {
        console.log('load');
        game.state.start('menu');
    }
};