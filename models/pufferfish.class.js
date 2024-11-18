class PufferFish extends MovableObject {
    width = 80;
    height = 50;
    y = 210;

    IMAGES_SWIMMING = [
        'img/2.Enemy/1.PufferFish/1.Swim/1.swim1.png',
        'img/2.Enemy/1.PufferFish/1.Swim/1.swim2.png',
        'img/2.Enemy/1.PufferFish/1.Swim/1.swim3.png',
        'img/2.Enemy/1.PufferFish/1.Swim/1.swim4.png',
        'img/2.Enemy/1.PufferFish/1.Swim/1.swim5.png'        
    ];

    IMAGES_TRANSITION = [
        'img/2.Enemy/1.PufferFish/2.transition/1.transition1.png',
        'img/2.Enemy/1.PufferFish/2.transition/1.transition2.png',
        'img/2.Enemy/1.PufferFish/2.transition/1.transition3.png',
        'img/2.Enemy/1.PufferFish/2.transition/1.transition4.png',
        'img/2.Enemy/1.PufferFish/2.transition/1.transition5.png',
    ];

    IMAGES_BUBBLESWIM = [
        'img/2.Enemy/1.PufferFish/3.Bubbleeswim/1.bubbleswim1.png',
        'img/2.Enemy/1.PufferFish/3.Bubbleeswim/1.bubbleswim2.png',
        'img/2.Enemy/1.PufferFish/3.Bubbleeswim/1.bubbleswim3.png',
        'img/2.Enemy/1.PufferFish/3.Bubbleeswim/1.bubbleswim4.png',
        'img/2.Enemy/1.PufferFish/3.Bubbleeswim/1.bubbleswim5.png'
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/1.PufferFish/4.DIE/1.Dead.png',
        'img/2.Enemy/1.PufferFish/4.DIE/1.Dead2.png',
        'img/2.Enemy/1.PufferFish/4.DIE/1.Dead3.png',
    ];
    
    constructor(existingObjects) {
        super().loadImage('img/2.Enemy/1.PufferFish/1.Swim/1.swim1.png');
        this.x = 450 + Math.random() * 2600;
        this.y = 100 + Math.random() * 300;
        this.speed = 0.15 + Math.random() + 0.20;
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_BUBBLESWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.setPositionWithoutOverlap(existingObjects);
        this.animate();
    }

    animate() {
        setInterval(() => {
        this.moveLeft();   
    }, 1000 / 60);
    setInterval(() => {
            this.playAnimation(this.IMAGES_SWIMMING);
        }, 3000 / 60);
    }
}