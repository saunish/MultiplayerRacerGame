var menuState = {
    create: function () {
        console.log('menu');
        var welcome = game.add.text((game.width*10)/100, (game.height*20)/100, 'Welcome to\nMultiPlayerRacer', {
            font: '30px Arial', fill: '#ffffff'
        });

        game.add.text((game.width*10)/100, (game.height*50)/100, 'Your Ride is: ', {
            font: '20px Arial', fill: '#ffffff'
        });

        yourVehicleName = game.add.text((game.width*25)/100, (game.height*50)/100, '', {
            font: '20px Arial', fill: '#D84315'
        });

        nameValidation = game.add.text((game.width*10)/100, (game.height*70)/100, '', {
            font: '20px Arial', fill: '#ffffff'
        });

        enterName = game.add.text((game.width*10)/100, (game.height*55)/100, 'Enter Your Name', {
            font: '20px Arial', fill: '#ffffff'
        });

        nameDisplay = game.add.text((game.width*10)/100, (game.height*60)/100, '', {
            font: '20px Arial', fill: '#D84315'
        });

        game.add.text((game.width*10)/100, (game.height*60)/100, '________________', {
            font: '20px Arial', fill: '#ffffff'
        });


        var start = game.add.text((game.width*10)/100, (game.height*80)/100, 'use arrow keys to select your ride and\ntype your name and\nthen press enter to start the game', {
            font: '15px Arial', fill: '#ffffff'
        });


        playerVehicle = '';
        playerVehicleSprite = '';
        enemyVehicle = '';
        enemyVehicleSprite = '';

        selector = game.add.sprite((game.width*49)/100, (game.height*19)/100, 'selector');
        selector.scale.setTo(0.2, 0.2);
        game.physics.enable(selector, Phaser.Physics.ARCADE);
        selector.body.collideWorldBounds = true;

        tempo = game.add.sprite((game.width*50)/100, (game.height*20)/100, 'vehicle', 'sprite1');
        tempo.scale.setTo(0.8, 0.8);
        game.physics.enable(tempo, Phaser.Physics.ARCADE);

        sedan = game.add.sprite((game.width*50)/100, (game.height*40)/100, 'vehicle', 'sprite2');
        sedan.scale.setTo(0.8, 0.8);
        game.physics.enable(sedan, Phaser.Physics.ARCADE);

        car = game.add.sprite((game.width*50)/100, (game.height*60)/100, 'vehicle', 'sprite3');
        car.scale.setTo(0.8, 0.8);
        game.physics.enable(car, Phaser.Physics.ARCADE);

        bike = game.add.sprite((game.width*50)/100, (game.height*80)/100, 'vehicle', 'sprite4');
        bike.scale.setTo(0.8, 0.8);
        game.physics.enable(bike, Phaser.Physics.ARCADE);

        bus = game.add.sprite((game.width*80)/100, (game.height*20)/100, 'vehicle', 'sprite6');
        bus.scale.setTo(0.8, 0.8);
        game.physics.enable(bus, Phaser.Physics.ARCADE);

        truck = game.add.sprite((game.width*80)/100, (game.height*40)/100, 'vehicle', 'sprite9');
        truck.scale.setTo(0.8, 0.8);
        game.physics.enable(truck, Phaser.Physics.ARCADE);

        scooter = game.add.sprite((game.width*80)/100, (game.height*60)/100, 'vehicle', 'sprite7');
        scooter.scale.setTo(0.8, 0.8);
        game.physics.enable(scooter, Phaser.Physics.ARCADE);

        cycle = game.add.sprite((game.width*80)/100, (game.height*80)/100, 'vehicle', 'sprite8');
        cycle.scale.setTo(0.8, 0.8);
        game.physics.enable(cycle, Phaser.Physics.ARCADE);


        nameArray = [];
        name = '';

        game.input.keyboard.addCallbacks(this, null, null, this.keyPress);

        $(document).bind("keydown", function (e) {
            if (e.keyCode == 8) { // backspace
                e.preventDefault();
                nameArray.pop();
                name = nameArray.join("");
            }
        });

        /*game.input.addPointer();

         this.game.input.onDown.add(function() {
         game.state.start('join');
         });*/
    },
    keyPress: function (char) {
        nameArray.push(char);
        name = nameArray.join("");
    },
    start: function () {
        game.state.start('join');
    },
    update: function () {

        game.physics.arcade.overlap(selector, tempo, this.tempoSelect, null, this);
        game.physics.arcade.overlap(selector, bus, this.busSelect, null, this);
        game.physics.arcade.overlap(selector, sedan, this.sedanSelect, null, this);
        game.physics.arcade.overlap(selector, truck, this.truckSelect, null, this);
        game.physics.arcade.overlap(selector, car, this.carSelect, null, this);
        game.physics.arcade.overlap(selector, scooter, this.scooterSelect, null, this);
        game.physics.arcade.overlap(selector, bike, this.bikeSelect, null, this);
        game.physics.arcade.overlap(selector, cycle, this.cycleSelect, null, this);

        enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

        upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);


        if(enterKey.isDown){
            if(nameArray.length > 2){
                this.start();
                selector.kill();
            }
            else {
                setTimeout(function() {
                    enterName.fill = '#ffffff';
                    nameValidation.fill = '#ffffff';
                    nameValidation.text = '';
                },2000);
                nameValidation.text = 'Name should be at least of\n3 characters';
                nameValidation.fill = '#FF0000';
                enterName.fill = '#FF0000';
            }
        }

        if(upKey.isDown){
            selector.body.y -= 5;
        }
        else if(downKey.isDown){
            selector.body.y += 5;
        }
        else if(rightKey.isDown){
            selector.body.x += 5;
        }
        else if(leftKey.isDown){
            selector.body.x -= 5;
        }


        yourVehicleName.text = playerVehicle;
        nameDisplay.text = name;
    },
    truckSelect: function (selector, truck) {
        playerVehicle = 'truck';
        playerVehicleSprite = 'sprite9';
    },
    sedanSelect: function (selector, sedan) {
        playerVehicle = 'sedan';
        playerVehicleSprite = 'sprite2';
    },
    carSelect: function (selector, car) {
        playerVehicle = 'car';
        playerVehicleSprite = 'sprite3';
    },
    bikeSelect: function (selector, bike) {
        playerVehicle = 'bike';
        playerVehicleSprite = 'sprite4';
    },
    cycleSelect: function (selector, cycle) {
        playerVehicle = 'cycle';
        playerVehicleSprite = 'sprite8';
    },
    busSelect: function (selector, bus) {
        playerVehicle = 'bus';
        playerVehicleSprite = 'sprite6';
    },
    tempoSelect: function (selector, tempo) {
        playerVehicle = 'tempo';
        playerVehicleSprite = 'sprite1';
    },
    scooterSelect: function (selector, scooter) {
        playerVehicle = 'scooter';
        playerVehicleSprite = 'sprite7';
    }
};