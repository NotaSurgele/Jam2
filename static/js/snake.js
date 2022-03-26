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

const UP = 0;
const RIGHT = 1;
const DOWN = 2;
const LEFT = 3;
let game = new Phaser.Game(config);
let player;
let direction = 1;

function preload()
{
    direction = RIGHT;
    this.load.image('sky', 'http://labs.phaser.io/assets/skies/deepblue.png');
    this.load.spritesheet('player', '../static/images/ghost.png',
        {frameWidth: 32, frameHeight: 32});
}

function create()
{
    this.add.image(400, 300, 'sky');
    player = this.physics.add.sprite(100, 32, 'player');

    this.anims.create({
        key: 'move',
        frames: this.anims.generateFrameNumbers('player', {start: 0, end: 3}),
        frameRate: 5,
        repeat: -1
    })

    player.setCollideWorldBounds(true);
}

function update()
{
    let cursor = this.input.keyboard.createCursorKeys();

    if (cursor.left.isDown && direction != RIGHT)
        direction = LEFT;
    else if (cursor.right.isDown && direction != LEFT)
        direction = RIGHT;
    else if (cursor.up.isDown && direction != DOWN)
        direction = UP;
    else if (cursor.down.isDown && direction != UP)
        direction = DOWN;
    switch (direction) {
    case LEFT:
        player.setVelocityY(0);
        player.setVelocityX(-100);
        player.anims.play('move', true);
        break;
    case RIGHT:
        player.setVelocityY(0);
        player.setVelocityX(100);
        player.anims.play('move', true);
        break;
    case UP:
        player.setVelocityX(0);
        player.setVelocityY(-100);
        player.anims.play('move', true);
        break;
    case DOWN:
        player.setVelocityX(0);
        player.setVelocityY(100);
        player.anims.play('move', true);
        break;
    default:
        break;
    }
}
