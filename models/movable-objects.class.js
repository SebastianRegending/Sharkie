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

    /**
     * Checks if some object is colliding with the character
     * @param {object} movableObject 
     * @returns coordinates of the object
     */
    isColliding(movableObject) {
        return (this.x + this.width - this.offsetX) >= movableObject.x && this.x <= (movableObject.x + movableObject.width) &&
            (this.y + this.height) >= movableObject.y &&
            (this.y + this.offsetY) <= (movableObject.y + movableObject.height)
    }

    /**
     * Sets the energy at hit
     */
    hit() {
        this.energy -= 20;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Checks whether the last hit was one second ago
     * @returns passed time after hit
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    /**
     * Count coins for statusbar
     */
    collectCoins() {
        this.itemCoins += 20;
        if (this.itemCoins > 100) {
            this.itemCoins = 100;
        }
    }

    /**
     * Count poison bottles for statusbar
     */
    collectBottles() {
        this.itemBottles += 20;
        if (this.itemBottles > 100) {
            this.itemBottles = 100;
        }
    }

    /**
     * Reduces poison bottles from statsbar after shot
     */
    shotPoisonBubble() {
        this.itemBottles = Math.max(0, this.itemBottles - 20);
    }

    /**
     * Updates when the last key was pressed
     */
    updateLastKeyPressed() {
        this.lastKeyPressed = new Date().getTime();
    }

    /**
     * Checks when the last key was pressed
     * @returns time passed after the last key was pressed
     */
    timeSinceLastKeyPressed() {
        let currentTime = new Date().getTime();
        let timePassed = (currentTime - this.lastKeyPressed) / 1000;
        return timePassed;
    }

    /**
     * Sets the energy to 0 
     * @returns energy 0
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * Accelerate the poison bubble
     */
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

    /**
     * Sets the logic to move right
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * Sets the logic to move left
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Sets the logic to move up
     */
    moveUp() {
        this.y -= this.speed;
    }

    /**
     * Sets the logic to move down
     */
    moveDown() {
        this.y += this.speed;
    }

    /**
     * Starts to play an animation
     * @param {object} images 
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}