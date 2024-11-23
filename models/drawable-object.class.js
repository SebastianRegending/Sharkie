class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 10;
    y = 100;
    width = 250;
    height = 200;
    bufferX = 50;
    bufferY = 50;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    drawFrame(ctx) {
        if (this instanceof Character) {
            let offsetX = 40;
            let offsetY = 30;
            let offsetTop = 80;

            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = "red";
            ctx.rect(this.x + offsetX, this.y + offsetTop, this.width - 2 * offsetX, this.height - offsetY - offsetTop);
            ctx.stroke();
        } else if
            (this instanceof PufferFish || this instanceof JellyFish || this instanceof Endboss || this instanceof PoisonBottles || this instanceof Coins) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
}