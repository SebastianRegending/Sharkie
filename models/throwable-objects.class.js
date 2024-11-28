class ThrowableObject extends MovableObject {
    speedX = 15;
    acceleration = 5;

    IMAGES_ATTACK_POISONED_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'
    ];

    /**
     * Sets the position and loads the images of the poison bubble
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.height = 45;
        this.width = 45;
        this.x = x;
        this.y = y;
        this.throw();
    }

    /**
     * Logic for the poison bubble and starts the throw interval
     */
    throw() {
        let stopX;
        const throwLogic = setInterval(() => {
            if (this.otherDirection) {
                this.x -= 25;
            } else {
            this.x += 25;
            }            
            if (this.speedX == 0) {
                stopX = this.x;
            }
        }, 1000 / 25);
        allIntervalIds.push(throwLogic);
    }    
}