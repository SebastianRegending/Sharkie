class JellyFish extends MovableObject {
    width = 80;
    height = 70;
    y = 190;

    IMAGES_SWIMMING = [
        'img/2.Enemy/2.JellyFish/SuperDangerous/Pink 1.png',
        'img/2.Enemy/2.JellyFish/SuperDangerous/Pink 2.png',
        'img/2.Enemy/2.JellyFish/SuperDangerous/Pink 3.png',
        'img/2.Enemy/2.JellyFish/SuperDangerous/Pink 4.png'
  
    ];
    
    constructor() {
        super().loadImage('img/2.Enemy/2.JellyFish/SuperDangerous/Pink 1.png');
        this.x = 450 + Math.random() * 2600;
        this.y = 100 + Math.random() * 300;
        this.speed = 0.15 + Math.random() + 0.20;
        this.loadImages(this.IMAGES_SWIMMING);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();   
        }, 1000 / 60);
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIMMING);
        }, 6000 / 60);
    }
}