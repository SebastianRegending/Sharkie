class Character extends MovableObject{
    world;
    swimming_sound = new Audio ('audio/swim.mp3');
    hurt_sound = new Audio ('audio/gettingdamage.mp3');
    dead_sound = new Audio ('audio/dead.mp3');
    enemy_hit_sound = new Audio ('audio/hit.mp3');
    endboss_gameover_sound = new Audio ('audio/gameover.mp3')
    snore_sound = new Audio ('audio/snore.mp3');
    speed = 4;

    IMAGES_SWIMMING = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];

    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png',
    ];

    IMAGES_LONG_IDLE = [
        'img/1.Sharkie/2.Long_IDLE/i1.png',
        'img/1.Sharkie/2.Long_IDLE/i2.png',
        'img/1.Sharkie/2.Long_IDLE/i3.png',
        'img/1.Sharkie/2.Long_IDLE/i4.png',
        'img/1.Sharkie/2.Long_IDLE/i5.png',
        'img/1.Sharkie/2.Long_IDLE/i6.png',
        'img/1.Sharkie/2.Long_IDLE/i7.png',
        'img/1.Sharkie/2.Long_IDLE/i8.png',
        'img/1.Sharkie/2.Long_IDLE/i9.png',
        'img/1.Sharkie/2.Long_IDLE/i10.png',
        'img/1.Sharkie/2.Long_IDLE/i11.png',
        'img/1.Sharkie/2.Long_IDLE/i12.png',
        'img/1.Sharkie/2.Long_IDLE/i13.png',
        'img/1.Sharkie/2.Long_IDLE/i14.png',
    ];

    IMAGES_DEAD = [
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00000.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00001.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00002.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00003.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00004.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00005.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00006.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00007.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00008.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00009.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00010.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00011.png'
    ];

    IMAGES_HURT_POISONED = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/5.png'
    ];

    IMAGES_HURT_ELECTRIC = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png'
    ];

    IMAGES_ATTACK_SLAP = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/2.png',
        'img/1.Sharkie/4.Attack/Fin slap/3.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png'
    ];

    IMAGES_ATTACK_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ];

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT_POISONED);
        this.loadImages(this.IMAGES_HURT_ELECTRIC);
        this.loadImages(this.IMAGES_ATTACK_SLAP);
        this.loadImages(this.IMAGES_ATTACK_BUBBLE);
        this.swimming_sound.volume = 0.5;
        this.hurt_sound.volume = 0.6;
        this.dead_sound.volume = 0.6;
        this.enemy_hit_sound.volume = 0.8;
        this.endboss_gameover_sound.volume = 0.8;
        this.animate();
    }

    animate() {
        const commandCharacterSwim = setInterval(() => {
            this.commandSwimLeft();
            this.commandSwimRight();
            this.commandSwimUp();
            this.commandSwimDown();
            this.world.camera_x = -this.x + 30;
        }, 1000 / 60);
        allIntervalIds.push(commandCharacterSwim);


            const animationCharacterStates = setInterval(() => {
                this.animationSwim();
                this.animationIdle();
                this.animationDead();
                this.animationHurt();              
                 }, 9500 / 60);              
                 allIntervalIds.push(animationCharacterStates);

           const animationCharacterSlap = setInterval(() => {
                this.animationSlap();
            }, 1000 / 20);
            allIntervalIds.push(animationCharacterSlap);
}

commandSwimLeft() {
    if(this.world.keyboard.LEFT && this.x > 0) {
        this.moveLeft();
        this.updateLastKeyPressed();
        this.otherDirection = true;         
        }
}

commandSwimRight() {
    if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.updateLastKeyPressed();
        this.otherDirection = false;
    }
}

commandSwimUp() {
    if(this.world.keyboard.UP && this.y > this.world.level.level_end_y_top) {
        this.moveUp();
        this.updateLastKeyPressed();
        this.swimming_sound.play();
    }
}

commandSwimDown() {
    if(this.world.keyboard.DOWN && this.y < this.world.level.level_end_y_bottom) {
        this.moveDown();
        this.updateLastKeyPressed();
        this.swimming_sound.play();
    }
}

animationSwim() {
    if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
        this.playAnimation(this.IMAGES_SWIMMING);
        this.updateLastKeyPressed();
            this.swimming_sound.play();               
    }        
}

animationIdle() {
    if(this.timeSinceLastKeyPressed() >= 10) {
        this.playAnimation(this.IMAGES_LONG_IDLE);
    } else {
        this.playAnimation(this.IMAGES_IDLE);
    }                
}

animationDead() {
    if (this.isDead()) {
        this.swimming_sound.pause();
        this.playAnimation(this.IMAGES_DEAD);
        this.world.background_sound.volume = 0;
            this.dead_sound.play();
            setTimeout(() => {
                clearAllIntervals();
                this.loadImage('img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00011.png');                         
            }, 100);                       
        setTimeout(() => {
            this.endboss_gameover_sound.play();
            document.getElementById('canvas').classList.add('d-none');
            document.getElementById('gameover').classList.remove('d-none');
            document.getElementById('mobile-keyboard').classList.add('d-none');
        }, 1500);
    }
}

animationHurt() {
    if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT_POISONED);
            this.hurt_sound.play();                        
    } else {                
            this.animationSwim();
}
}

animationSlap() {
    if(this.world.keyboard.SPACE) {
        this.playAnimation(this.IMAGES_ATTACK_SLAP);
        this.updateLastKeyPressed();
            this.enemy_hit_sound.play();
    }
}
}