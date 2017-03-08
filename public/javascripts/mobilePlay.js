var mobilePlayState = {
    create: function () {

        startTime = new Date();

        //sky
        sky = game.add.sprite(0, 0, 'sky');
        sky.width = game.width;
        sky.height = game.height;
        //sky end

        //hill
        fhill_t1 = game.add.sprite(0-5, 0, 'hill1');
        fhill_t1.width = game.width+10;
        fhill_t1.height = game.height;
        game.physics.enable(fhill_t1, Phaser.Physics.ARCADE);

        fhill_t2 = game.add.sprite(game.width-5, 0, 'hill1');
        fhill_t2.width = game.width+10;
        fhill_t2.height = game.height;
        game.physics.enable(fhill_t2, Phaser.Physics.ARCADE);

        nhill_t1 = game.add.sprite(0-5, 0, 'hill2');
        nhill_t1.width = game.width+10;
        nhill_t1.height = game.height;
        game.physics.enable(nhill_t1, Phaser.Physics.ARCADE);

        nhill_t2 = game.add.sprite(game.width-5, 0, 'hill2');
        nhill_t2.width = game.width+10;
        nhill_t2.height = game.height;
        game.physics.enable(nhill_t2, Phaser.Physics.ARCADE);
        //hill end

        //trees
        ftrees1 = game.add.sprite(0-5, 0, 'trees1');
        ftrees1.width = game.width+10;
        ftrees1.height = game.height;
        game.physics.enable(ftrees1, Phaser.Physics.ARCADE);

        ftrees2 = game.add.sprite(game.width-5, 0, 'trees1');
        ftrees2.width = game.width+10;
        ftrees2.height = game.height;
        game.physics.enable(ftrees2, Phaser.Physics.ARCADE);
        //trees end


        //bushes
        bushes1 = game.add.sprite(0-5, 0, 'bushes');
        bushes1.width = game.width+10;
        bushes1.height =game.height;
        game.physics.enable(bushes1, Phaser.Physics.ARCADE);

        bushes2 = game.add.sprite(game.width-5, 0, 'bushes');
        bushes2.width = game.width+10;
        bushes2.height = game.height;
        game.physics.enable(bushes2, Phaser.Physics.ARCADE);
        //bushes end

        //near trees
        ntrees1 = game.add.sprite(0-5, 0, 'trees2');
        ntrees1.width = game.width+10;
        ntrees1.height = game.height;
        game.physics.enable(ntrees1, Phaser.Physics.ARCADE);


        ntrees2 = game.add.sprite(game.width-5, 0, 'trees2');
        ntrees2.width = game.width+10;
        ntrees2.height = game.height;
        game.physics.enable(ntrees2, Phaser.Physics.ARCADE);

        //near trees end


        //ground
        ground1 = game.add.sprite(0-5, 0, 'ground');
        ground1.width = game.width+10;
        ground1.height = game.height;
        game.physics.enable(ground1, Phaser.Physics.ARCADE);

        ground2 = game.add.sprite(game.width-5, 0, 'ground');
        ground2.width = game.width+10;
        ground2.height = game.height;
        game.physics.enable(ground2, Phaser.Physics.ARCADE);
        //ground end


        //clouds
        sclouds = game.add.sprite(0, 0, 'clouds');
        sclouds.width = game.width;
        sclouds.height = game.height;

        fcloud_t1 = game.add.sprite(0-5, 0, 'clouds1');
        fcloud_t1.width = game.width+10;
        fcloud_t1.height = game.height;
        game.physics.enable(fcloud_t1, Phaser.Physics.ARCADE);

        fcloud_t2 = game.add.sprite(game.width-5, 0, 'clouds1');
        fcloud_t2.width = game.width+10;
        fcloud_t2.height = game.height;
        game.physics.enable(fcloud_t2, Phaser.Physics.ARCADE);

        ncloud_t1 = game.add.sprite(0-5, 0, 'clouds2');
        ncloud_t1.width = game.width+10;
        ncloud_t1.height = game.height;
        game.physics.enable(ncloud_t1, Phaser.Physics.ARCADE);

        ncloud_t2 = game.add.sprite(game.width-5, 0, 'clouds2');
        ncloud_t2.width = game.width+10;
        ncloud_t2.height = game.height;
        game.physics.enable(ncloud_t2, Phaser.Physics.ARCADE);
        //clouds end

        dude = game.add.sprite((game.width*10)/100, (game.height*50)/100, 'dude');
        dude.scale.setTo(0.20, 0.20);
        dude.animations.add('run', [
            'sprite1', 'sprite2', 'sprite3', 'sprite4',
            'sprite5', 'sprite6', 'sprite7', 'sprite8'
        ], 10, true);
        game.physics.enable(dude, Phaser.Physics.ARCADE);
        dude.body.bounce.y = 0.2;
        dude.body.gravity.y = 600;
        dude.body.collideWorldBounds = true;

        trophy = game.add.sprite((game.width*80)/100, (game.height*50)/100, 'trophy');
        trophy.scale.setTo(0.05, 0.05);
        game.physics.enable(trophy, Phaser.Physics.ARCADE);
        trophy.body.bounce.y = 0.2;
        trophy.body.gravity.y = 600;


        var grd = game.add.bitmapData(game.width, 20);
        grd.fill(0, 0, 0, 0);
        ground_line = game.add.sprite(0, (game.height*78)/100, grd);
        game.physics.enable(ground_line, Phaser.Physics.ARCADE);
        ground_line.body.immovable = true;

        gameTime = game.add.text((game.width*10)/100, (game.height*10)/100, '', {
            font: '30px Arial', fill: '#ffffff'
        });

        leftArrow = game.add.sprite((game.width*85)/100, (game.height*85)/100, 'control', 'sprite4');
        leftArrow.scale.setTo(0.75, 0.75);
        leftArrow.inputEnabled = true;

        rightArrow = game.add.sprite((game.width*5)/100, (game.height*85)/100, 'control', 'sprite2');
        rightArrow.scale.setTo(0.75, 0.75);
        rightArrow.inputEnabled = true;

    }
};