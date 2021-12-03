const config = {
    width: 800,
    height: 600,
    backgroundColor: '#ffffff',
    physics: {
        default: "arcade",
        arcade: { gravity: { x: 0, y: 0 } }
    },
    scene: [mainScene]
};
var game = new Phaser.Game(config);
