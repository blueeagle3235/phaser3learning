class mainScene extends Phaser.Scene {
    constructor() {
        super({
            key: "mainScene"
        });
    }

    preload() {
        this.load.tilemapTiledJSON("map", "./assets/tilemap3.json");
        this.load.image("tileset", "https://labs.phaser.io/assets/tilemaps/tiles/super-mario.png");
        this.load.audio("place", "./assets/place.mp3")
        this.load.audio("break", "./assets/break.mp3")
    }
    create() {
        let map = this.make.tilemap({ key: "map" }),
            tileset = map.addTilesetImage("tileset"),
            layer1 = map.createLayer("layer1", tileset, 0, 0),
            layer2 = map.createLayer("layer2", tileset, 0, 0),
            tileid = 24,
            remainingblocks = 50,
            text1;
        const visited = new Map();
        for (let i = 0; i < 50; i++) {
            for (let j = 0; j < 21; j++) {
                visited.set(`${i},${j},`, false);
            }
        }
        const placesfx = this.sound.add("place");
        const breaksfx = this.sound.add("break");
        text1 = this.add.text(10, 10, "", {
            fontSize: "16px",
            fill: "#302305",
            stroke: "black",
            strokeThickness: 0.5
        });
        map.setCollision([14, 15, 16, 20, 21, 22, 23, 24, 25, 27, 28, 29, 33, 39, 40]);
        this.input.on("pointerdown", function (pointer) {
            let pointerx = Math.round(pointer.x / 16),
                pointery = Math.round(pointer.y / 16);
            if (pointery < 19 && pointerx < 43) {
                console.log(`${pointerx < 43 || pointery < 19}`);
                if (visited.get(`${pointerx},${pointery}`) === true) {
                    visited.set(`${pointerx},${pointery}`, false);
                    layer2.removeTileAt(pointerx, pointery);
                    breaksfx.play();
                    remainingblocks++;
                } else if (remainingblocks > 0) {
                    layer2.putTileAt(tileid, pointerx, pointery);
                    visited.set(`${pointerx},${pointery}`, true);
                    placesfx.play();
                    remainingblocks--;
                }
            }
            text1.setText(`blocks remaining:${remainingblocks}`);
        });
    }
    update() { }
}
