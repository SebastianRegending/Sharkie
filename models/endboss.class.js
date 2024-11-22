class Endboss extends MovableObject {
    world;
    height = 400;
    width = 500;
    y = -30;
    percentage = 100;
    hadFirstContact = false;
    endboss_youwin_sound = new Audio ('audio/youwin.mp3');
    endboss_bite_sound = new Audio ('audio/bite.mp3');
    heartbeat_sound = new Audio ('audio/heartbeat.mp3');
    introPlayed = 0;
    
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
        this.endboss_youwin_sound.volume = 0.5;
        this.endboss_bite_sound.volume = 0.5;
        this.x = 3100;
        this.speed = 16;
        this.animate();
    }

    animate() {
        const animationCharacterMeetsBoss = setInterval(() => {
            this.animationDead();
            this.endbossIntro();
            this.endbossFirstContact();
            this.endbossHitsCharacter();
        }, 6000 / 60);
        allIntervalIds.push(animationCharacterMeetsBoss);
    }
    
    setPercentageEndboss(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_POISON_BOTTLE[this.resolveImageIndexBottomToTop()];
        this.img = this.imageCache[path];
    }
    
    resolveImageIndexTopToBottom() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage == 80) {
            return 4;
        } else if (this.percentage == 60) {
            return 3;
        } else if (this.percentage == 40) {
            return 2;
        } else if (this.percentage == 20) {
            return 1;
        } else {
            return 0;
        }
    }
    
    animationDead() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
            setTimeout(() => {
                clearAllIntervals();
                this.loadImage('img/2.Enemy/3.FinalEnemy/Dead/Mesa de trabajo 2 copia 10.png');
            }, 100);
            setTimeout(() => {
                this.endboss_youwin_sound.play();
                document.getElementById('canvas').classList.add('d-none');
                document.getElementById('youwin').classList.remove('d-none');
                document.getElementById('mobile-keyboard').classList.add('d-none');
            }, 1000);
            return;
        }
    }
    
    endbossIntro() {
        if (!this.hadFirstContact && this.world.character.x > 2000) {
            this.world.background_sound.volume = 0;
            this.heartbeat_sound.play();
        }
        if (!this.hadFirstContact && this.world.character.x > 2500) {
            if (this.introPlayed < 10) {
                this.playAnimation(this.IMAGES_INTRO);
                this.introPlayed++;
            } else {
                this.hadFirstContact = true;
            }
            return;
        }
    }
    
    endbossFirstContact() {
        if (this.hadFirstContact) {
            if (this.world.character.x < this.x) {
                this.moveLeft();
                this.playAnimation(this.IMAGES_ATTACK);
                this.heartbeat_sound.pause();                
                this.endboss_bite_sound.play();
            } else if (world.character.x > this.x) {
                this.playAnimation(this.IMAGES_IDLE);
            }
        } else {
            this.playAnimation(this.IMAGES_IDLE);
        }
    }
    
    endbossHitsCharacter() {
        if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
        }
    }

}