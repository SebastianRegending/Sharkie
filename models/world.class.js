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
    throwableObjects = [];
    lastTimeThrowed = 0;
    background_sound = new Audio('audio/backgroundmusic.mp3');
    bubble_pop = new Audio('audio/bubblepop.mp3');
    collect_coin = new Audio('audio/collectcoin.mp3');
    collect_bottle = new Audio('audio/collectbottle.mp3');

    constructor(canvas, keyboard, allIntervalIds) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.allIntervalIds = allIntervalIds;
        this.draw();
        this.setWorld();
        this.checkEnemyCollisions();
        this.startExecuteCollisions();
        this.background_sound.volume = 0.5;
        this.bubble_pop.volume = 0.7;
    }

    setWorld() {
        this.character.world = this;
        this.level.enemies.forEach(enemy => {
            if (enemy instanceof Endboss) {
                enemy.world = this;
            }
        });
    }

    checkEnemyCollisions() {
        const enemyCollisions = setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    this.statusBarHealth.setPercentageHealth(this.character.energy);
                }
            });
        }, 1000);
        allIntervalIds.push(enemyCollisions);
    }

    startExecuteCollisions() {
        const itemCollisions = setInterval(() => this.executeCollisions(), 100)
        allIntervalIds.push(itemCollisions);
    }

    executeCollisions() {
        this.checkCoinsCollisions();
        this.checkPoisonBottlesCollisions();
        this.checkSlapAttackCollisions();
        this.checkThrowObject();
        if (this.bubble) {
            this.checkBubbleAttackCollisions(this.bubble);
        }
    }

    checkCoinsCollisions() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.character.collectCoins();
                this.collect_coin.play();
                this.statusBarCoins.setPercentageCoins(this.character.itemCoins);
                this.level.coins.splice(index, 1);
            }
        });
    }

    checkPoisonBottlesCollisions() {
        this.level.poisonBottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle) && this.throwableObjects.length <= 4) {
                this.character.collectBottles();
                this.collect_bottle.play();
                this.statusBarPoison.setPercentagePoison(this.character.itemBottles);
                this.level.poisonBottles.splice(index, 1);
                let bubble = new ThrowableObject();
                this.throwableObjects.push(bubble);
            }
        });
    }

    checkSlapAttackCollisions() {
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
    }

    checkBubbleAttackCollisions(bubble) {
        if (!bubble) return;
        let bubbleIndex = this.throwableObjects.indexOf(bubble);
        if (bubbleIndex == -1) {
            this.bubble = null;
            return;
        }
        this.level.enemies.forEach((enemy) => {
            if (bubble.isColliding(enemy)) {
                if (enemy instanceof Endboss) {
                    this.character.shotPoisonBubble();
                    this.statusBarPoison.setPercentagePoisonBubbleShot(this.character.itemBottles);
                    this.throwableObjects.splice(bubbleIndex, 1);
                    enemy.hit();
                    this.bubble = null;
                }
            }
        });
        if (bubble.x >= bubble.startPosition + 400) {
            this.throwableObjects.splice(bubbleIndex, 1);
            this.character.shotPoisonBubble();
            this.statusBarPoison.setPercentagePoisonBubbleShot(this.character.itemBottles);
            this.bubble = null;
        }
    }

    checkThrowObject() {
        const currentTime = Date.now();
        if (this.keyboard.D && currentTime - this.lastTimeThrowed >= 1000) {
            if (this.throwableObjects.length > 0) {
                this.bubble = this.throwableObjects[0];
                this.bubble.x = this.character.x + 200;
                this.bubble.y = this.character.y + 100;
                this.bubble.startPosition = this.bubble.x;
                this.lastTimeThrowed = currentTime;
                this.bubble_pop.play();
            }
        }
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
        this.background_sound.play();


        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }
    addToMap(movableObject) {
        if (movableObject.otherDirection) {
            this.flipImage(movableObject);
        }
        movableObject.draw(this.ctx);
        movableObject.drawFrame(this.ctx);
        if (movableObject.otherDirection) {
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