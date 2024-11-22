class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    lastKeyPressed = 0;
    itemCoins = 0;
    itemBottles = 0;
    offsetX = 40;
    offsetY = 100;
    speedX = 15;
    acceleration = 14;

    isColliding(movableObject) {
        return (this.x + this.width - this.offsetX) >= movableObject.x && this.x <= (movableObject.x + movableObject.width) &&
            (this.y + this.height) >= movableObject.y &&
            (this.y + this.offsetY) <= (movableObject.y + movableObject.height)
    }

    hit() {
        this.energy -= 20;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    collectCoins() {
        this.itemCoins += 20;
        if (this.itemCoins > 100) {
            this.itemCoins = 100;
        }
}

    collectBottles() {
        this.itemBottles += 20;
        if (this.itemBottles > 100) {
            this.itemBottles = 100;
        }
    }

    shotPoisonBubble() {
        this.itemBottles = Math.max(0, this.itemBottles - 20);
    }

    updateLastKeyPressed() {
        this.lastKeyPressed = new Date().getTime();
    }

    timeSinceLastKeyPressed() {
        let currentTime = new Date().getTime();
        let timePassed = (currentTime - this.lastKeyPressed) / 1000;        
        return timePassed;
    }

    isDead() {
        return this.energy == 0;
    }
    
    bubbleAcceleration() {
        const bubbleAccelerationLogic = setInterval(() => {
            this.x += this.speedX;
            this.speedX -= this.acceleration;
            if (this.speedX <= 0) {
                this.speedX = 0;
            }
        }, 1000 / 25);
        allIntervalIds.push(bubbleAccelerationLogic);
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
}
}