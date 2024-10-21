class StatusbarCoins extends DrawableObject {

    IMAGES_COINS = [
        'img/4.Marcadores/green/Coin/0_copia4.png',
        'img/4.Marcadores/green/Coin/20_copia2.png',
        'img/4.Marcadores/green/Coin/40_copia4.png',
        'img/4.Marcadores/green/Coin/60_copia4.png',
        'img/4.Marcadores/green/Coin/80_copia4.png',
        'img/4.Marcadores/green/Coin/100_copia4.png'
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_COINS);
        this.x = 250;
        this.y = 0;
        this.width = 200;
        this.height = 50;
        this.setPercentageCoins(0);
    }

    setPercentageCoins(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_COINS[this.resolveImageIndexBottomToTop()];
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
}