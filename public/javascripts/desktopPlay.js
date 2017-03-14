var desktopPlayState = {
    create: function () {
        console.log('desktopPlay');

        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;


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

        dude = game.add.sprite((game.width*10)/100, (game.height*50)/100, 'vehicle', playerVehicleSprite);
        game.physics.enable(dude, Phaser.Physics.ARCADE);
        dude.body.bounce.y = 0.2;
        dude.body.gravity.y = 600;
        dude.body.collideWorldBounds = true;


        opp = game.add.sprite((game.width*10)/100, (game.height*50)/100, 'vehicle', enemyVehicleSprite);
        game.physics.enable(opp, Phaser.Physics.ARCADE);
        opp.body.bounce.y = 0.2;
        opp.body.gravity.y = 600;
        opp.body.collideWorldBounds = true;

        trophy = game.add.sprite((game.width*80)/100, (game.height*50)/100, 'trophy');
        trophy.scale.setTo(0.05, 0.05);
        game.physics.enable(trophy, Phaser.Physics.ARCADE);
        trophy.body.bounce.y = 0.2;
        trophy.body.gravity.y = 600;


        obstacle = game.add.sprite((game.width*50)/100, (game.height*50)/100, 'obstacle');
        obstacle.scale.setTo(0.04, 0.04);
        game.physics.enable(obstacle, Phaser.Physics.ARCADE);
        obstacle.body.bounce.y = 0.2;
        obstacle.body.gravity.y = 600;

        obstacle1 = game.add.sprite(game.width-10, (game.height*50)/100, 'obstacle');
        obstacle1.scale.setTo(0.04, 0.04);
        game.physics.enable(obstacle1, Phaser.Physics.ARCADE);
        obstacle1.body.bounce.y = 0.2;
        obstacle1.body.gravity.y = 600;

        var grd = game.add.bitmapData(game.width, 0);
        grd.fill(0, 0, 0, 0);
        ground_line = game.add.sprite(0, (game.height*78)/100, grd);
        game.physics.enable(ground_line, Phaser.Physics.ARCADE);
        ground_line.body.immovable = true;


        var fullscreen = game.add.button((game.width*95)/100, (game.height*0)/100, 'fullScreen', this.gofull);
        fullscreen.scale.setTo(0.15, 0.15);


        gameTime = game.add.text((game.width*10)/100, (game.height*10)/100, '', {
            font: '30px Arial', fill: '#ffffff'
        });

        game.add.text((game.width*70)/100, (game.height*10)/100, 'Who is First ?', {
            font: '30px Arial', fill: '#ffffff'
        });

        firstPlayerName = game.add.text((game.width*80)/100, (game.height*15)/100, '', {
            font: '30px Arial', fill: '#ffffff'
        });

        if(!game.device.desktop){
            upArrow = game.add.button((game.width*50)/100, (game.height*85)/100, 'control', this.mobileJump);
            upArrow.scale.setTo(1, 0.75);
            upArrow.frameName = 'sprite1';
        }

        enemyXposition = opp.body.x;
        enemyYposition = opp.body.y;

        socket.on('enemyPos', function (data) {
            if(isFirst) {
                if(!data.p1) {
                    enemyXposition = (data.xPosition*game.width)/100;
                    enemyYposition = (data.yPosition*game.height)/100;
                }
            }
            else {
                if(data.p1) {
                    enemyXposition = (data.xPosition*game.width)/100;
                    enemyYposition = (data.yPosition*game.height)/100;
                }
            }
        });

        pRun = false;
        pjRun = false;

    },

    run_switch : true,


    update: function() {

        if(opp.body.x > dude.body.x) firstPlayerName.text = enemyName;
        else if(dude.body.x > opp.body.x) firstPlayerName.text = 'YOU';

        opp.body.x = enemyXposition;

        endTime = new Date();
        t = endTime - startTime;
        timeExpelled = t/1000;
        gameTime.text = timeExpelled + ' sec';

        hitPlatform = game.physics.arcade.collide(dude, ground_line);
        game.physics.arcade.collide(opp, ground_line);
        game.physics.arcade.collide(trophy, ground_line);
        game.physics.arcade.collide(obstacle, ground_line);
        game.physics.arcade.collide(obstacle1, ground_line);

        game.physics.arcade.overlap(dude, obstacle, this.playerHitObstacle, null, this);
        game.physics.arcade.overlap(dude, obstacle1, this.playerHitObstacle, null, this);

        game.physics.arcade.overlap(opp, obstacle, this.enemyHitObstacle, null, this);
        game.physics.arcade.overlap(opp, obstacle1, this.enemyHitObstacle, null, this);

        game.physics.arcade.overlap(dude, trophy, this.playerTrophyCollected, null, this);
        game.physics.arcade.overlap(opp, trophy, this.enemyTrophyCollected, null, this);

        leftkey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        rightkey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        spacekey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        if(isFirst) socket.emit('position1', {
            clientId : clientId,
            roomNo : roomNo,
            xPercent : (dude.body.x*100)/game.width,
            yPercent : (dude.body.y*100)/game.height
        });
        else socket.emit('position2', {
            clientId : clientId,
            roomNo : roomNo,
            xPercent : (dude.body.x*100)/game.width,
            yPercent : (dude.body.y*100)/game.height
        });


        this.parallax_mid_far((game.width*8)/100);
        this.parallax_near((game.width*15)/100);

        if(spacekey.isDown && dude.body.touching.down && hitPlatform) {
            dude.body.velocity.y = -400;
            dude.body.x += (game.width*5)/100;
        }

        if(rightkey.isDown || leftkey.isDown){
            if (rightkey.isDown && this.run_switch && !leftkey.isDown)
            {
                dude.body.x += (game.width*2)/100;
                this.run_switch = false;
            }else if(leftkey.isDown && !this.run_switch && !rightkey.isDown){
                dude.body.x += (game.width*2)/100;
                this.run_switch = true;
            }
        }

        if(pRun){
            dude.body.x += (game.width*2)/100;
            pRun = false;
        }
        if(pjRun){
            dude.body.x += (game.width*4)/100;
            pjRun = false;
        }

        game.input.onDown.add(this.mRun, this);

        dude.body.velocity.x = -(game.width*15)/100;
        opp.body.velocity.x = -(game.width*15)/100;

        this.parallax_far((game.width*2)/100);
    },
    mRun : function () {
        pRun = true;
    },
    playerTrophyCollected: function(dude, trophy) {
        trophy.kill();
        socket.emit('setLeaderboard', {playerWon: name, time : timeExpelled});
        game.state.start('playerWin');
    },
    enemyTrophyCollected: function(dude, trophy) {
        trophy.kill();
        game.state.start('enemyWin');
    },
    playerHitObstacle: function (dude, obstacle) {
        dude.reset((game.width*10)/100, (game.height*50)/100);
    },
    enemyHitObstacle: function (opp, obstacle) {
        opp.reset((game.width*10)/100, (game.height*50)/100);
    },
    parallax_near: function (speed) {

        var speed1 = (speed*50)/100;
        var speed2 = (speed*60)/100;
        var speed3 = (speed*80)/100;
        var speed4 = speed;

        obstacle.body.velocity.x = -speed;
        if(obstacle.body.x < 0) obstacle.body.x = game.width;
        obstacle1.body.velocity.x = -speed;
        if(obstacle1.body.x < 0) obstacle1.body.x = game.width;

        ftrees1.body.velocity.x = -speed1;
        ftrees2.body.velocity.x = -speed1;

        bushes1.body.velocity.x = -speed2;
        bushes2.body.velocity.x = -speed2;

        ntrees1.body.velocity.x = -speed3;
        ntrees2.body.velocity.x = -speed3;

        ground1.body.velocity.x = -speed4;
        ground2.body.velocity.x = -speed4;

        //far trees config
        if(ftrees1.body.position.x*-1 >= game.width){
            ftrees1.body.x = game.width;
        }
        if(ftrees2.body.position.x*-1 >= game.width){
            ftrees2.body.x = game.width;
        }
        //far trees config end


        //near trees config
        if(ntrees1.body.position.x*-1 >= game.width){
            ntrees1.body.x = game.width;
        }
        if(ntrees2.body.position.x*-1 >= game.width){
            ntrees2.body.x = game.width;
        }
        //near trees config end


        //bushes
        if(bushes1.body.position.x*-1 >= game.width){
            bushes1.body.x = game.width
        }
        if(bushes2.body.position.x*-1 >= game.width){
            bushes2.body.x = game.width
        }
        // bushes end

        //ground
        if(ground1.body.position.x*-1 >= game.width){
            ground1.body.x = game.width;
        }
        if(ground2.body.position.x*-1 >= game.width){
            ground2.body.x = game.width;
        }
        //ground end
    },
    parallax_mid_far: function (speed) {

        var speed1 = (speed*60)/100;
        var speed2 = (speed*80)/100;

        fhill_t1.body.velocity.x = -speed1;
        fhill_t2.body.velocity.x = -speed1;

        nhill_t1.body.velocity.x = -speed2;
        nhill_t2.body.velocity.x = -speed2;

        if(fhill_t1.body.position.x*-1 >= game.width){
            fhill_t1.body.x = game.width;
        }
        if(fhill_t2.body.position.x*-1 >= game.width){
            fhill_t2.body.x = game.width;
        }

        if(nhill_t1.body.position.x*-1 >= game.width){
            nhill_t1.body.x = game.width;
        }
        if(nhill_t2.body.position.x*-1 >= game.width){
            nhill_t2.body.x = game.width;
        }
    },
    parallax_far: function (speed){
        fcloud_t1.body.velocity.x = -(speed - 10);
        fcloud_t2.body.velocity.x = -(speed - 10);

        ncloud_t1.body.velocity.x = -(speed + 10);
        ncloud_t2.body.velocity.x = -(speed + 10);

        if(ncloud_t1.body.position.x*-1 >= game.width){
            ncloud_t1.body.x = game.width;
        }
        if(ncloud_t2.body.position.x*-1 >= game.width){
            ncloud_t2.body.x = game.width;
        }

        if(fcloud_t1.body.position.x*-1 >= game.width){
            fcloud_t1.body.x = game.width;
        }
        if(fcloud_t2.body.position.x*-1 >= game.width){
            fcloud_t2.body.x = game.width;
        }
    },

    mobileJump: function () {
        if(hitPlatform){
            pjRun = true;
            dude.body.velocity.y = -400;
        }
    },
    gofull: function() {
        if (game.scale.isFullScreen) game.scale.stopFullScreen();
        else game.scale.startFullScreen(false);
    }
};