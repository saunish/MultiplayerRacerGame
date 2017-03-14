var menuState = {
    create: function () {
        console.log('menu');
        var welcome = game.add.text((game.width*10)/100, (game.height*20)/100, 'Welcome to\nMultiPlayerRacer', {
            font: '30px Arial', fill: '#ffffff'
        });

        rideSelect = game.add.text((game.width*10)/100, (game.height*50)/100, 'Your Ride is: ', {
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

        nameDisplay = game.add.text((game.width*11)/100, (game.height*60)/100, '', {
            font: '20px Arial', fill: '#D84315'
        });

        game.add.text((game.width*10)/100, (game.height*61)/100, '________________', {
            font: '20px Arial', fill: '#ffffff'
        });


        if(!game.device.desktop){
            playGame = game.add.button((game.width*5)/100, (game.height*55)/100, 'playButton', this.playGame);
            playGame.scale.setTo(0.5, 0.5);
            game.physics.enable(playGame, Phaser.Physics.ARCADE);
        }

        var start = game.add.text((game.width*10)/100, (game.height*80)/100, 'Select your ride on click and\ntype your name and\nthen press enter to start the game', {
            font: '15px Arial', fill: '#ffffff'
        });


        playerVehicle = '';
        playerVehicleSprite = '';
        enemyVehicle = '';
        enemyVehicleSprite = '';
        isPhone = false;


        tempo = game.add.button((game.width*50)/100, (game.height*20)/100, 'vehicle', this.tempoSelect);
        tempo.scale.setTo(0.8, 0.8);
        game.physics.enable(tempo, Phaser.Physics.ARCADE);
        tempo.frameName = 'sprite1';

        sedan = game.add.button((game.width*50)/100, (game.height*40)/100, 'vehicle', this.sedanSelect);
        sedan.scale.setTo(0.8, 0.8);
        game.physics.enable(sedan, Phaser.Physics.ARCADE);
        sedan.frameName = 'sprite2';

        car = game.add.button((game.width*50)/100, (game.height*60)/100, 'vehicle', this.carSelect);
        car.scale.setTo(0.8, 0.8);
        game.physics.enable(car, Phaser.Physics.ARCADE);
        car.frameName ='sprite3';

        bike = game.add.button((game.width*50)/100, (game.height*80)/100, 'vehicle', this.bikeSelect);
        bike.scale.setTo(0.8, 0.8);
        game.physics.enable(bike, Phaser.Physics.ARCADE);
        bike.frameName = 'sprite4';

        bus = game.add.button((game.width*80)/100, (game.height*20)/100, 'vehicle', this.busSelect);
        bus.scale.setTo(0.8, 0.8);
        game.physics.enable(bus, Phaser.Physics.ARCADE);
        bus.frameName = 'sprite6';

        truck = game.add.button((game.width*80)/100, (game.height*40)/100, 'vehicle', this.truckSelect);
        truck.scale.setTo(0.8, 0.8);
        game.physics.enable(truck, Phaser.Physics.ARCADE);
        truck.frameName = 'sprite9';

        scooter = game.add.button((game.width*80)/100, (game.height*60)/100, 'vehicle', this.scooterSelect);
        scooter.scale.setTo(0.8, 0.8);
        game.physics.enable(scooter, Phaser.Physics.ARCADE);
        scooter.frameName = 'sprite7';

        cycle = game.add.button((game.width*80)/100, (game.height*80)/100, 'vehicle', this.cycleSelect);
        cycle.scale.setTo(0.8, 0.8);
        game.physics.enable(cycle, Phaser.Physics.ARCADE);
        cycle.frameName = 'sprite8';


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
    },
    keyPress: function (char) {
        nameArray.push(char);
        name = nameArray.join("");
    },
    playGame: function () {
        isPhone = true;
    },
    start: function () {
        game.state.start('join');
    },
    update: function () {

        enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

        upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);

        if(isPhone){
            if(playerVehicleSprite == '' && playerVehicle == ''){
                isPhone = false;
                setTimeout(function() {
                    rideSelect.fill = '#ffffff';
                    nameValidation.fill = '#ffffff';
                    nameValidation.text = '';
                },2000);
                nameValidation.text = 'Select your ride too';
                nameValidation.fill = '#FF0000';
                rideSelect.fill = '#FF0000';
            }
            else{
                if(name == ''){
                    this.namePrompt();
                }else {
                    this.start();
                }
            }
        }

        if(enterKey.isDown){
            if(nameArray.length > 2){
                if(playerVehicleSprite == '' && playerVehicle == ''){
                    setTimeout(function() {
                        rideSelect.fill = '#ffffff';
                        nameValidation.fill = '#ffffff';
                        nameValidation.text = '';
                    },2000);
                    nameValidation.text = 'Select your ride too';
                    nameValidation.fill = '#FF0000';
                    rideSelect.fill = '#FF0000';
                }
                else{
                    this.start();
                }
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

        yourVehicleName.text = playerVehicle;
        nameDisplay.text = name;
    },
    truckSelect: function () {
        playerVehicle = 'truck';
        playerVehicleSprite = 'sprite9';
    },
    sedanSelect: function () {
        playerVehicle = 'sedan';
        playerVehicleSprite = 'sprite2';
    },
    carSelect: function () {
        playerVehicle = 'car';
        playerVehicleSprite = 'sprite3';
    },
    bikeSelect: function () {
        playerVehicle = 'bike';
        playerVehicleSprite = 'sprite4';
    },
    cycleSelect: function () {
        playerVehicle = 'cycle';
        playerVehicleSprite = 'sprite8';
    },
    busSelect: function () {
        playerVehicle = 'bus';
        playerVehicleSprite = 'sprite6';
    },
    tempoSelect: function () {
        playerVehicle = 'tempo';
        playerVehicleSprite = 'sprite1';
    },
    scooterSelect: function () {
        playerVehicle = 'scooter';
        playerVehicleSprite = 'sprite7';
    },
    namePrompt: function () {
        name = prompt("Please enter your name", 'xyz');
    }
};