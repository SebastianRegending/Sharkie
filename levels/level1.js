let level1;
function initLevel() {

    level1 = new Level(
        [
            new PufferFish(),
            new PufferFish(),
            new JellyFish(),
            new JellyFish(),
            new PufferFish(),
            new PufferFish(),
            new JellyFish(),
            new PufferFish(),
            new JellyFish(),
            new Endboss()
        ],

        [
            new PoisonBottles(),
            new PoisonBottles(),
            new PoisonBottles(),
            new PoisonBottles(),
            new PoisonBottles(),
            new PoisonBottles(),
            new PoisonBottles(),
            new PoisonBottles(),
            new PoisonBottles(),
            new PoisonBottles()
        ],

        [
            new Coins(),
            new Coins(),
            new Coins(),
            new Coins(),
            new Coins(),
            new Coins(),
            new Coins(),
            new Coins(),
            new Coins(),
            new Coins(),
        ],

        [

            new BackgroundObject('img/3.Background/Layers/5.Water/L2.png', -720),
            new BackgroundObject('img/3.Background/Layers/4.Fondo_2/L2.png', -720),
            new BackgroundObject('img/3.Background/Layers/3.Fondo_1/L2.png', -720),
            new BackgroundObject('img/3.Background/Layers/2.Floor/L2.png', -720),
            new BackgroundObject('img/3.Background/Layers/1.Light/2.png', -720),

            new BackgroundObject('img/3.Background/Layers/5.Water/L1.png', 0),
            new BackgroundObject('img/3.Background/Layers/5.Water/L2.png', 720),
            new BackgroundObject('img/3.Background/Layers/4.Fondo_2/L1.png', 0),
            new BackgroundObject('img/3.Background/Layers/4.Fondo_2/L2.png', 720),
            new BackgroundObject('img/3.Background/Layers/3.Fondo_1/L1.png', 0),
            new BackgroundObject('img/3.Background/Layers/3.Fondo_1/L2.png', 720),
            new BackgroundObject('img/3.Background/Layers/2.Floor/L1.png', 0),
            new BackgroundObject('img/3.Background/Layers/2.Floor/L2.png', 720),
            new BackgroundObject('img/3.Background/Layers/1.Light/1.png', 0),
            new BackgroundObject('img/3.Background/Layers/1.Light/2.png', 720),

            new BackgroundObject('img/3.Background/Layers/5.Water/L1.png', 1440),
            new BackgroundObject('img/3.Background/Layers/5.Water/L2.png', 2160),
            new BackgroundObject('img/3.Background/Layers/4.Fondo_2/L1.png', 1440),
            new BackgroundObject('img/3.Background/Layers/4.Fondo_2/L2.png', 2160),
            new BackgroundObject('img/3.Background/Layers/3.Fondo_1/L1.png', 1440),
            new BackgroundObject('img/3.Background/Layers/3.Fondo_1/L2.png', 2160),
            new BackgroundObject('img/3.Background/Layers/2.Floor/L1.png', 1440),
            new BackgroundObject('img/3.Background/Layers/2.Floor/L2.png', 2160),
            new BackgroundObject('img/3.Background/Layers/1.Light/1.png', 1440),
            new BackgroundObject('img/3.Background/Layers/1.Light/2.png', 2160),

            new BackgroundObject('img/3.Background/Layers/5.Water/L1.png', 2880),
            new BackgroundObject('img/3.Background/Layers/4.Fondo_2/L1.png', 2880),
            new BackgroundObject('img/3.Background/Layers/3.Fondo_1/L1.png', 2880),
            new BackgroundObject('img/3.Background/Layers/2.Floor/L1.png', 2880),
            new BackgroundObject('img/3.Background/Layers/1.Light/1.png', 2880)
        ]
    );

}