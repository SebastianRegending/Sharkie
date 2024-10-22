class Bubbles extends MovableObject {
    height = 70;
    width = 70;

    IMAGES_ATTACK_POISONED_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_ATTACK_POISONED_BUBBLE);
        this.animate();
    }

    animate() {
        setTimeout(() => {
            if (this.world.keyboard.D) {
                this.playAnimation(this.IMAGES_ATTACK_POISONED_BUBBLE);
            }
        }, 500);


    }

}