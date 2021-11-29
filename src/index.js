// import Phaser from "phaser";

// class myGame extends Phaser.Scene {
//   constructor() {
//     super();
//   }
//   preload() {
//     this.load.image(
//       "square",
//       "https://labs.phaser.io/assets/games/snake/body.png"
//     );
//   }
//   create() {
//     square = this.physics.add.image(400, 300, "square");
//     wall = this.physics.add.staticGroup();
//     square.setCollideWorldBounds(true);
//     cursors = this.input.keyboard.createCursorKeys();
//   }
//   update() {
//     square.setVelocityX(0);
//     square.setVelocityY(0);
//     if (cursors.left.isDown) {
//       square.setVelocityX(-60);
//     }
//     if (cursors.right.isDown) {
//       square.setVelocityX(60);
//     }
//     if (cursors.up.isDown) {
//       square.setVelocityY(-60);
//     }
//     if (cursors.down.isDown) {
//       square.setVelocityY(60);
//     }
//   }
// }
// const config = {
//   type: Phaser.AUTO,
//   parent: "phaser-example",
//   width: 800,
//   height: 600,
//   scene: myGame,
//   physics: {
//     default: "arcade",
//     arcade: {
//       gravity: { y: 300 },
//       debug: false
//     }
//   }
// };

// const game = new Phaser.Game(config);
