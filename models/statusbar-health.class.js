class StatusbarHealth extends DrawableObject {

    IMAGES_HEALTH = [
        'img/4.Marcadores/green/Life/0_copia3.png',
        'img/4.Marcadores/green/Life/20_copia4.png',
        'img/4.Marcadores/green/Life/40_copia3.png',
        'img/4.Marcadores/green/Life/60_copia3.png',
        'img/4.Marcadores/green/Life/80_copia3.png',
        'img/4.Marcadores/green/Life/100_copia2.png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH);
        this.x = 10;
        this.y = 0;
        this.width = 200;
        this.height = 50;
        this.setPercentageHealth(100);
    }

    setPercentageHealth(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEALTH[this.resolveImageIndexTopToBottom()];
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
}