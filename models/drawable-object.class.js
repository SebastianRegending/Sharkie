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

    /**
     * Loads the image
     * @param {string} path
     * @param {number} x
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Draws the image on a predefined position
     * @param {object} ctx 
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Loads the images of an array
     * @param {array} arr 
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}