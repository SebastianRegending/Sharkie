class StatusbarPoison extends DrawableObject {

    IMAGES_POISON_BOTTLE = [
        'img/4.Marcadores/green/poisonedbubbles/0_copia2.png',
        'img/4.Marcadores/green/poisonedbubbles/20_copia3.png',
        'img/4.Marcadores/green/poisonedbubbles/40_copia2.png',
        'img/4.Marcadores/green/poisonedbubbles/60_copia2.png',
        'img/4.Marcadores/green/poisonedbubbles/80_copia2.png',
        'img/4.Marcadores/green/poisonedbubbles/100_copia3.png'
    ];

    percentage = 0;

    /**
     * Loads the position and images of the poison statusbar
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES_POISON_BOTTLE);
        this.x = 490;
        this.y = 0;
        this.width = 200;
        this.height = 50;
        this.setPercentagePoison(0);
    }

    /**
     * Sets the precentage of the poison statusbar
     * @param {number} percentage 
     */
    setPercentagePoison(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_POISON_BOTTLE[this.resolveImageIndexBottomToTop()];
        this.img = this.imageCache[path];
    }

    /**
     * Sets the precentage of the coins statusbar after bubble was shot
     * @param {number} percentage 
     */
    setPercentagePoisonBubbleShot(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_POISON_BOTTLE[this.resolveImageIndexTopToBottom()];
        this.img = this.imageCache[path];
    }

    /**
     *  Sets the number to update the level of the poison statusbar when poison bottle was collected
     * @returns number
     */
    resolveImageIndexBottomToTop() {
        if (this.percentage == 0) {
            return 0;
        } else if (this.percentage == 20) {
            return 1;
        } else if (this.percentage == 40) {
            return 2;
        } else if (this.percentage == 60) {
            return 3;
        } else if (this.percentage == 80) {
            return 4;
        } else {
            return 5;
        }
    }

    /**
     * Sets the number to update the level of the poison statusbar when poison bubble was shot
     * @returns number
     */
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
}