// import Phaser from "phaser";

// const config = {
// type: Phaser.AUTO,
// parent: "phaser-example",
// width: 800,
// height: 600,
// physics: { default: "arcade", gravity: {}, debug: false },
// scene: { preload: preload, create: create, update: update }
// };
// function preload() {
// this.load.image(
// "square",
// "https://labs.phaser.io/assets/games/snake/body.png"
// );
// }
// function create() {
// let square = this.physics.add.image(400, 300, "square");
// let wall = this.physics.add.staticGroup();
// square.setCollideWorldBounds(true);
// }
// const cursors = this.input.keyboard.createCursorKeys();
// function update() {
// if (cursors.left.isDown) {
// square.setVelocityX(-10);
// }
// if (cursors.right.isDown) {
// square.setVelocityX(10);
// }
// if (cursors.up.isDown) {
// square.setVelocityY(-10);
// }
// if (cursors.down.isDown) {
// square.setVelocityY(10);
// }
// }

// const game = new Phaser.Game(config);
