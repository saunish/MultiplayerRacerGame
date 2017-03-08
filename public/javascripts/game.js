/*console.log(window.innerWidth);
console.log(window.innerHeight);

var scaledHeight = Math.round((window.innerHeight - 24)/3);
var fullHeight = scaledHeight*3;

var finalWidth = (fullHeight*4)/3;
var finalHeight = fullHeight;

var playable = true;

if(finalHeight < 350) playable = false;
else if(finalWidth > window.innerWidth) playable = false;*/
console.log('game');
var game = new Phaser.Game(800, 600, Phaser.AUTO, '#viewPort');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('join', joinState);
game.state.add('desktopPlay', desktopPlayState);
game.state.add('mobilePlay', mobilePlayState);
game.state.add('playerWin', playerWinState);
game.state.add('enemyWin', enemyWinState);
game.state.add('resize', resizeState);

game.state.start('boot');

//if(playable) game.state.start('boot');
//else game.state.start('resize');