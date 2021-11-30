class mainScene extends Phaser.Scene {
    constructor() {
        super({
            key:"mainScene"
        });
    }
    preload() {

    }
    create() {
        this.add.text(400,300,"HI"),{
            fontSize:"24px"
        };
    }
    update() {
        console.log('hey');
    }
}