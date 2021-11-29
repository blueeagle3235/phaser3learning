import Phaser from "phaser";

class myGame extends Phaser.Scene {
  constructor() {
    super();
  }
  preload() {}
  create() {}
}
const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: myGame
};

const game = new Phaser.Game(config);
