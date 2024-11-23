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

    /**
     * Initializes the parameters for the jellyfish und loads the images
     */
    constructor() {
        super().loadImage('img/2.Enemy/2.JellyFish/SuperDangerous/Pink 1.png');
        this.x = 450 + Math.random() * 2600;
        this.y = 100 + Math.random() * 300;
        this.speed = 0.20 + Math.random() + 0.25;
        this.loadImages(this.IMAGES_SWIMMING);
        this.animate();
    }

    /**
     * Starts the animation for the jellyfish
     */
    animate() {
        const commandMoveJellyfish = setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        allIntervalIds.push(commandMoveJellyfish);
        const animateMoveJellyfish = setInterval(() => {
            this.playAnimation(this.IMAGES_SWIMMING);
        }, 6000 / 60);
        allIntervalIds.push(animateMoveJellyfish);
    }
}