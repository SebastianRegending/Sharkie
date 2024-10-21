class PoisonBottles extends MovableObject {
    width = 60;
    height = 70;
    y = 390;

    IMAGES_POISON_BOTTLES = [
        'img/4.Marcadores/Posión/Animada/1.png',
        'img/4.Marcadores/Posión/Animada/2.png',
        'img/4.Marcadores/Posión/Animada/3.png',
        'img/4.Marcadores/Posión/Animada/4.png',
        'img/4.Marcadores/Posión/Animada/5.png',
        'img/4.Marcadores/Posión/Animada/6.png',
        'img/4.Marcadores/Posión/Animada/7.png',
        'img/4.Marcadores/Posión/Animada/8.png'

    ];

    constructor() {
        super().loadImage('img/4.Marcadores/Posión/Animada/1.png');
        this.loadImages(this.IMAGES_POISON_BOTTLES);
        this.x = 500 + Math.random() * 2400;
        this.animatePoisonBottles();
    }

    animatePoisonBottles() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_POISON_BOTTLES);
        }, 8000 / 60);
    }





}