export default class Game extends Phaser.Scene {

    InputQ = 0

    r1 = 0;

    constructor() { super() }

    preload() {
        this.load.image('background', '../static/images/background.png');
    }

    create() {
        this.InputQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.add.image(400, 300, 'background')
        let r1 = this.add.circle(200, 200, 80, 0x6666ff)
    }

    update() {
        if (this.InputQ.isDown)
            console.log("A")
    }
}