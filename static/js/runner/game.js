// import Player from "./player.js"

export default class SnakeGame extends Phaser.Scene
{
    // player = new Player()
    // direction = 1
    // scoreText
    // music
    b0
    b1
    cam
    val1
    val2

    preload()
    {
        this.load.image('bg0', '../static/images/L1.png');
        this.load.image('bg1', '../static/images/L2.png');
        this.load.image('bg2', '../static/images/L3.png');
        this.load.image('bg3', '../static/images/L3_5.png');
        this.load.image('bg4', '../static/images/L4.png');
        this.load.image('bg5', '../static/images/L5.png');
        this.load.image('bg6', '../static/images/L5_5.png');
        this.load.image('bg7', '../static/images/L6.png');
        this.load.image('bg8', '../static/images/L7.png');
        this.load.image('bg9', '../static/images/L8.png');
        this.load.image('bg10', '../static/images/L9.png');
        // this.player.preload(this)
    }

    create()
    {
        // this.physics.startSystemn(Phaser.Physics.ARCADE)
        this.b0 = this.add.tileSprite(0, 0, 928, 793, 'bg0')
            .setOrigin(0)
            .setScrollFactor(0, 1)
        this.b1 = this.add.tileSprite(0, 0, 928, 793, 'bg1')
            .setOrigin(0)
            .setScrollFactor(0, 1)
        this.b2 = this.add.tileSprite(0, 0, 928, 793, 'bg2')
            .setOrigin(0)
            .setScrollFactor(0, 1)
        // this.player.create(this)
        // this.scoreText = this.add.text(10, 10, 'score : 0',
        //     { fontSize: '32px', fill: '#000'})
    }

    update()
    {
        this.cam = this.cameras.main
        // val1 = this.cameras.main.scrollX += 5
        this.b1.setTilePosition(this.cameras.main.scrollX)
        this.cameras.main.scrollX += 1;
        this.b2.setTilePosition(this.cameras.main.scrollX)
        // this.player.update(this)
        // this.scoreText.setText('Score: ' + this.player.getScore())
    }
}