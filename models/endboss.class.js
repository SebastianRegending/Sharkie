class Endboss extends MovableObject {
    height = 400;
    width = 500;
    y = -30;
    hadFirstContact = false;

    IMAGES_INTRO = [
        'img/2.Enemy/3.FinalEnemy/1.Introduce/1.png',
        'img/2.Enemy/3.FinalEnemy/1.Introduce/2.png',
        'img/2.Enemy/3.FinalEnemy/1.Introduce/3.png',
        'img/2.Enemy/3.FinalEnemy/1.Introduce/4.png',
        'img/2.Enemy/3.FinalEnemy/1.Introduce/5.png',
        'img/2.Enemy/3.FinalEnemy/1.Introduce/6.png',
        'img/2.Enemy/3.FinalEnemy/1.Introduce/7.png',
        'img/2.Enemy/3.FinalEnemy/1.Introduce/8.png',
        'img/2.Enemy/3.FinalEnemy/1.Introduce/9.png',
        'img/2.Enemy/3.FinalEnemy/1.Introduce/10.png'
    ];

    IMAGES_IDLE = [
        'img/2.Enemy/3.FinalEnemy/2.floating/1.png',
        'img/2.Enemy/3.FinalEnemy/2.floating/2.png',
        'img/2.Enemy/3.FinalEnemy/2.floating/3.png',
        'img/2.Enemy/3.FinalEnemy/2.floating/4.png',
        'img/2.Enemy/3.FinalEnemy/2.floating/5.png',
        'img/2.Enemy/3.FinalEnemy/2.floating/6.png',
        'img/2.Enemy/3.FinalEnemy/2.floating/7.png',
        'img/2.Enemy/3.FinalEnemy/2.floating/8.png',
        'img/2.Enemy/3.FinalEnemy/2.floating/9.png',
        'img/2.Enemy/3.FinalEnemy/2.floating/10.png',
        'img/2.Enemy/3.FinalEnemy/2.floating/11.png',
        'img/2.Enemy/3.FinalEnemy/2.floating/12.png',
        'img/2.Enemy/3.FinalEnemy/2.floating/13.png'
    ];

    IMAGES_ATTACK = [
        'img/2.Enemy/3.FinalEnemy/Attack/1.png',
        'img/2.Enemy/3.FinalEnemy/Attack/2.png',
        'img/2.Enemy/3.FinalEnemy/Attack/3.png',
        'img/2.Enemy/3.FinalEnemy/Attack/4.png',
        'img/2.Enemy/3.FinalEnemy/Attack/5.png',
        'img/2.Enemy/3.FinalEnemy/Attack/6.png'
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/3.FinalEnemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3.FinalEnemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3.FinalEnemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3.FinalEnemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3.FinalEnemy/Dead/Mesa de trabajo 2 copia 10.png',
    ];

    IMAGES_HURT = [
        'img/2.Enemy/3.FinalEnemy/Hurt/1.png',
        'img/2.Enemy/3.FinalEnemy/Hurt/2.png',
        'img/2.Enemy/3.FinalEnemy/Hurt/3.png',
        'img/2.Enemy/3.FinalEnemy/Hurt/4.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_INTRO);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.x = 3100;
        this.speed = 8;
        this.animate();
    }

    animate() {
        let i = 0;
        setInterval(() => {
            if (i < 10) {
                this.playAnimation(this.IMAGES_INTRO);
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
            i++;            
            if (world.character.x > 2400 && !this.hadFirstContact) {
                i = 0;
                this.hadFirstContact = true;
                
            }
        }, 150);
        setInterval(() => {
            if (world.character.x > 2700 && this.hadFirstContact || world.level.enemies[0].x < 3000 && world.level.enemies[0].x > 500 ) {
                this.moveLeft();  
                this.playAnimation(this.IMAGES_ATTACK);
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 3000 / 60);
    }
}