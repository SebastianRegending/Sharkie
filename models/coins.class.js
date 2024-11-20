class Coins extends MovableObject {
    width = 45;
    height = 45;
    y = 200;

    IMAGES_COINS = [
        'img/4.Marcadores/1.Coins/1.png',
        'img/4.Marcadores/1.Coins/2.png',
        'img/4.Marcadores/1.Coins/3.png',
        'img/4.Marcadores/1.Coins/4.png',
    ];

    constructor() {
        super().loadImage('img/4.Marcadores/1.Coins/1.png');
        this.loadImages(this.IMAGES_COINS);
        this.x = 500 + Math.random() * 2000;
        this.y = 100 + Math.random() * 250;
        this.animateCoins();
    }

    animateCoins() {
        const animateCoins = setInterval(() => {
            this.playAnimation(this.IMAGES_COINS);
        }, 12000 / 60);
        allIntervalIds.push(animateCoins);
    }

}