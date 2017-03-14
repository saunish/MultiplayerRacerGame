console.log('game');
var game = new Phaser.Game(900, 600, Phaser.AUTO, '#viewPort');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('join', joinState);
game.state.add('desktopPlay', desktopPlayState);
game.state.add('mobilePlay', mobilePlayState);
game.state.add('playerWin', playerWinState);
game.state.add('enemyWin', enemyWinState);
game.state.add('resize', resizeState);
game.state.add('leaderboard', leaderboardState);

game.state.start('boot');