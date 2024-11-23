class ThrowableObject extends MovableObject {
    speedX = 15;
    acceleration = 5;

    IMAGES_ATTACK_POISONED_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'
    ];

    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.height = 45;
        this.width = 45;
        this.x = x;
        this.y = y;
        this.throw();
    }

    throw() {
        const throwLogic = setInterval(() => {
            this.x += 25;
            if (this.speedX == 0) {
                stopX = this.x;
            }
            if (this.speedX == 0 && this.x >= stopX) {
                this.y -= 20;
            }
        }, 1000 / 25);
        allIntervalIds.push(throwLogic);
    }
}