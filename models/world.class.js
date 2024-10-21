class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBarHealth = new StatusbarHealth();
    statusBarCoins = new StatusbarCoins();
    statusBarPoison = new StatusbarPoison();
    background_sound = new Audio ('audio/backgroundmusic.mp3');

    constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.checkEnemyCollisions();
    this.checkCoinsCollisions();
    this.checkPoisonBottlesCollisions();
    this.checkSlapAttackCollisions();
    this.checkBubbleAttackCollisions()
}

setWorld() {
    this.character.world = this;
}

checkEnemyCollisions() {
    setInterval(() => {
        this.level.enemies.forEach((enemy) => {
            if(this.character.isColliding(enemy)) {                                                
                this.character.hit();
                this.statusBarHealth.setPercentageHealth(this.character.energy);
    }});
    }, 1000);
}

checkCoinsCollisions() {
    setInterval(() => {
        this.level.coins.forEach((coin, index) => {
            if(this.character.isColliding(coin)) {                                                
                this.character.collectCoins();
                this.statusBarCoins.setPercentageCoins(this.character.itemCoins);
                this.level.coins.splice(index, 1);
            }   
        });
    }, 1000);
}

checkPoisonBottlesCollisions() {
    setInterval(() => {
        this.level.poisonBottles.forEach((bottle, index) => {
            if(this.character.isColliding(bottle)) {                          
            this.character.collectBottles();
            this.statusBarPoison.setPercentagePoison(this.character.itemBottles);
            this.level.poisonBottles.splice(index, 1);
            }   
        });
    }, 1000);
}

checkSlapAttackCollisions() {
    setInterval(() => {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isColliding(enemy) && this.keyboard.SPACE && enemy instanceof Pufferfish) {
                    this.level.enemies.splice(index, 1);
            }
        });
    }, 1000);
}

checkBubbleAttackCollisions() {
    setInterval(() => {
        this.level.enemies.forEach((Endboss, index) => {
            if(this.character.isColliding(Endboss) && this.keyboard.D) {                          
            this.level.enemies.splice(index, 1);
            }   
        });
    }, 1000);
}


draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBarHealth);
    this.addToMap(this.statusBarCoins);
    this.addToMap(this.statusBarPoison);
    this.ctx.translate(this.camera_x, 0);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.poisonBottles);
    this.addObjectsToMap(this.level.coins);
    this.ctx.translate(-this.camera_x, 0);
    this.background_sound.play();

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectsToMap(objects){
        objects.forEach(object => {
            this.addToMap(object);
    });
    }
    addToMap(movableObject) {
        if(movableObject.otherDirection) {
            this.flipImage(movableObject);      
        }
        movableObject.draw(this.ctx);
        movableObject.drawFrame(this.ctx);
        if(movableObject.otherDirection) {
            this.flipImageBack(movableObject);
        }
    }

    flipImage(movableObject) {
        this.ctx.save();
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.x = movableObject.x * -1; 
    }

    flipImageBack(movableObject) {
        movableObject.x = movableObject.x * -1;
        this.ctx.restore();
    }
}