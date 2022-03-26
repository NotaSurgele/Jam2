let config = {
    type : Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0},
            debug: false
        }
    },
    scene : {
        preload : preload,
        create : create,
        update : update
    }
};

var game = new Phaser.Game(config);
let player;

function preload()
{
    this.load.image('sky', 'http://labs.phaser.io/assets/skies/deepblue.png');
    this.load.spritesheet('player', '../static/images/ghost.png',
        {frameWidth: 32, frameHeight: 32});
}

function create()
{
    this.add.image(400, 300, 'sky');
    player = this.physics.add.sprite(100, 32, 'player');

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('player', {start: 0, end: 3}),
        frameRate: 5,
        repeat: -1
    })

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('player', {start: 0, end: 3}),
        frameRate: 5,
        repeat: -1
    });

    player.setBounce(0, 0);
    player.setCollideWorldBounds(true);
}

function update()
{
    let cursor = this.input.keyboard.createCursorKeys();

    if (cursor.left.isDown) {
        player.setVelocityY(0);
        player.setVelocityX(-100);
        player.anims.play('left', true);
    } else if (cursor.right.isDown) {
        player.setVelocityY(0);
        player.setVelocityX(100);
        player.anims.play('right', true);
    } else if (cursor.up.isDown) {
        player.setVelocityX(0);
        player.setVelocityY(-100);
        player.anims.play('right', true);
    } else if (cursor.down.isDown) {
        player.setVelocityX(0);
        player.setVelocityY(100);
        player.anims.play('right', true);
    }
}
