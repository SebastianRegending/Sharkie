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
    endbossHealth = 100;
    throwableObjects = [];
    lastTimeThrowed = 0;
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
    this.checkThrowObject();
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
    }, 100);
}

checkPoisonBottlesCollisions() {
    setInterval(() => {
        this.level.poisonBottles.forEach((bottle, index) => {
            if(this.character.isColliding(bottle) && this.throwableObjects.length <= 4) {
                this.character.collectBottles();
                this.statusBarPoison.setPercentagePoison(this.character.itemBottles);
                this.level.poisonBottles.splice(index, 1);
                let bubble = new ThrowableObject();
            this.throwableObjects.push(bubble);
            }
               });
    }, 100);
}

checkSlapAttackCollisions() {
        setInterval(() => {
        this.level.enemies.forEach((enemy, enemyIndex) => {
            if (this.character.isColliding(enemy) && this.keyboard.SPACE) {  
                if (enemy instanceof PufferFish) {
                    this.level.enemies.splice(enemyIndex, 1);
                }                    
                if (enemy instanceof JellyFish) {
                    this.level.enemies.splice(enemyIndex, 1);                    
                }
            }
        });
    }, 100);
}

checkBubbleAttackCollisions(bubble) {
    const collisionCheckInterval = setInterval(() => {
        let bubbleIndex = this.throwableObjects.indexOf(bubble);
        if (bubbleIndex == -1) {
            clearInterval(collisionCheckInterval);
            return;
        }
        this.level.enemies.forEach((enemy, enemyIndex) => {
            if (bubble.isColliding(enemy)) {                
                if (enemy instanceof Endboss) {
                    this.endbossHealth -= 20;
                    this.throwableObjects.splice(bubbleIndex, 1);
                    clearInterval(collisionCheckInterval);
                    if (this.endbossHealth <= 0) {
                    // this.level.enemies.splice(enemyIndex, 1);
                    }
                }
            }
        });
        if (bubble.x >= bubble.startPosition + 400) {
            this.throwableObjects.splice(bubbleIndex, 1);
            clearInterval(collisionCheckInterval);
        }
    }, 100);
}

checkThrowObject() {
    setInterval(() => {
        const currentTime = Date.now();
        if (this.keyboard.D && currentTime - this.lastTimeThrowed >= 1000) {
            if (this.throwableObjects.length > 0) {
                let bubble = this.throwableObjects[0];
                bubble.x = this.character.x + 200;
                bubble.y = this.character.y + 100;
                bubble.startPosition = bubble.x;
                this.lastTimeThrowed =  currentTime;       
                this.checkBubbleAttackCollisions(bubble);
        }
    }}, 100);
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
    this.addObjectsToMap(this.throwableObjects);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.poisonBottles);
    this.addObjectsToMap(this.level.enemies);
    this.addToMap(this.character);
    this.ctx.translate(-this.camera_x, 0);

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