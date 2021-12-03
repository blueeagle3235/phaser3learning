class mainScene extends Phaser.Scene {
    constructor() {
        super({
            key: "mainScene"
        });
    }
    preload() {
        // this.load.image('tiles', 'https://labs.phaser.io/assets/tilemaps/tiles/kenny_platformer_64x64.png');
        // this.load.tilemapCSV('tilemap', './assets/tilemap.csv');
        // this.load.tilemapTiledJSON('map', 'https://labs.phaser.io/assets/tilemaps/maps/tileset-collision-shapes.json');
        this.load.tilemapTiledJSON('map', './assets/tilemap.json');
        this.load.image('tileset', 'https://labs.phaser.io/assets/tilemaps/tiles/super-mario.png');
        //this.load.image('kenny_platformer_64x64', 'https://labs.phaser.io/assets/tilemaps/tiles/kenny_platformer_64x64.png');
    }
    create() {
        let map = this.make.tilemap({ key: 'map' });
        let tileset = map.addTilesetImage('tileset');
        let layer1 = map.createLayer(0, tileset, 0, 0);
        // map.setCollision([14, 15, 16, 20, 21, 22, 23, 24, 25, 27, 28, 29, 33, 39, 40]);
        // this.input.on('pointerdown', function (pointer) {
        //     map.putTileAt(40, Math.round(pointer.x / 16), Math.round(pointer.y / 16));
        // });
    }
    update() { }
}
