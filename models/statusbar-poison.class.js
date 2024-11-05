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

    constructor() {
        super();
        this.loadImages(this.IMAGES_POISON_BOTTLE);
        this.x = 490;
        this.y = 0;
        this.width = 200;
        this.height = 50;
        this.setPercentagePoison(0);
    }

    setPercentagePoison(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_POISON_BOTTLE[this.resolveImageIndexBottomToTop()];
        this.img = this.imageCache[path];
    }

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