var bootState = {
    create : function () {
        console.log('boot');

        this.game.stage.disableVisibilityChange = true;
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.state.start('load');
    }
};