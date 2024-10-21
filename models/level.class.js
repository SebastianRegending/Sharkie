class Level {
    enemies;
    poisonBottles;
    coins;
    backgroundObjects;
    level_end_x = 2900;
    level_end_y_top = -20;
    level_end_y_bottom = 300;

    constructor(enemies, poisonBottles, coins, backgroundObjects) {
        this.enemies = enemies;
        this.poisonBottles = poisonBottles;
        this.coins = coins;
        this.backgroundObjects = backgroundObjects;
    }

}