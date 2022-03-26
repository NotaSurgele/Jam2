export default class Player
{
    UP = 0;
    RIGHT = 1;
    DOWN = 2;
    LEFT = 3;
    player;
    direction = 1;

    constructor() { }

    preload(Scene)
    {
        Scene.load.spritesheet('player', '../static/images/ghost.png',
            {frameWidth: 32, frameHeight: 32});
    }

    create(Scene)
    {
        this.player = Scene.physics.add.sprite(100, 32, 'player');

        Scene.anims.create({
            key: 'move',
            frames: Scene.anims.generateFrameNumbers('player', {start: 0, end: 3}),
            frameRate: 5,
            repeat: -1
        })

        this.player.setCollideWorldBounds(true);
    }

    update(Scene)
    {
        let cursor = Scene.input.keyboard.createCursorKeys();

        if (cursor.left.isDown && this.direction != this.RIGHT)
            this.direction = this.LEFT;
        else if (cursor.right.isDown && this.direction != this.LEFT)
            this.direction = this.RIGHT;
        else if (cursor.up.isDown && this.direction != this.DOWN)
            this.direction = this.UP;
        else if (cursor.down.isDown && this.direction != this.UP)
            this.direction = this.DOWN;
        switch (this.direction) {
        case this.LEFT:
            this.player.setVelocityY(0);
            this.player.setVelocityX(-100);
            this.player.anims.play('move', true);
            break;
        case this.RIGHT:
            this.player.setVelocityY(0);
            this.player.setVelocityX(100);
            this.player.anims.play('move', true);
            break;
        case this.UP:
            this.player.setVelocityX(0);
            this.player.setVelocityY(-100);
            this.player.anims.play('move', true);
            break;
        case this.DOWN:
            this.player.setVelocityX(0);
            this.player.setVelocityY(100);
            this.player.anims.play('move', true);
            break;
        default:
            break;
        }
    }
}