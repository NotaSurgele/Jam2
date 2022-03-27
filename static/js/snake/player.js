export default class Player
{
    UP = 0;
    RIGHT = 1;
    DOWN = 2;
    LEFT = 3;
    direction = 1;
    hitbox = 0;
    velocity = 100
    player = new Array();
    directions = new Array();
    index = 1

    constructor() { }

    preload(Scene)
    {
        Scene.load.spritesheet('player', '../static/images/ghost.png',
            {frameWidth: 32, frameHeight: 32});
    }

    create(Scene)
    {
        this.player[0] = Scene.physics.add.sprite(100, 32, 'player');

        Scene.anims.create({
            key: 'move',
            frames: Scene.anims.generateFrameNumbers('player', {start: 0, end: 3}),
            frameRate: 5,
            repeat: -1
        })

        this.player[0].setCollideWorldBounds(true);
        this.hitbox = new Phaser.Geom.Rectangle(this.player[0].x, this.player[0].y, 50, 50)
        this.directions[0] = this.RIGHT
    }

    velocityIncrease() {
        this.velocity += 15
    }

    addBody(Scene) {
        this.player[this.index++] = Scene.physics.add.sprite(100, 32, 'player')
        this.directions[this.index - 1] = this.getEnum(this.index - 1)
    }

    setDirection(i, Enum) {
        this.directions[i] = Enum
    }

    getEnum(index) {
        return this.directions[index]
    }

    updateBody() {
        for (var i = 1; i < this.player.length; i++) {
            if (this.directions[i - 1] == this.LEFT)
                this.player[i].setPosition(this.player[i - 1].x + 32, this.player[i - 1].y)
            if (this.directions[i - 1]  == this.RIGHT)
                this.player[i].setPosition(this.player[i - 1].x - 32, this.player[i - 1].y)
            if (this.directions[i - 1]  == this.UP)
                this.player[i].setPosition(this.player[i - 1].x, this.player[i - 1].y + 32)
            if (this.directions[i - 1]  == this.DOWN)
                this.player[i].setPosition(this.player[i - 1].x, this.player[i - 1].y - 32)
            this.setDirection(i, this.getEnum(i - 1))
        }
    }

    input(Scene) {
        let cursor = Scene.input.keyboard.createCursorKeys();

        this.directions[0] = this.direction;
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
            this.player[0].setVelocityY(0);
            this.player[0].setVelocityX(-this.velocity);
            this.player[0].anims.play('move', true);
            break;
        case this.RIGHT:
            this.player[0].setVelocityY(0);
            this.player[0].setVelocityX(this.velocity);
            this.player[0].anims.play('move', true);
            break;
        case this.UP:
            this.player[0].setVelocityX(0);
            this.player[0].setVelocityY(-this.velocity);
            this.player[0].anims.play('move', true);
            break;
        case this.DOWN:
            this.player[0].setVelocityX(0);
            this.player[0].setVelocityY(this.velocity);
            this.player[0].anims.play('move', true);
            break;
        default:
            break;
        }
    }

    update(Scene, food)
    {
        this.hitbox.x = this.player[0].x
        this.hitbox.y = this.player[0].y
        this.input(Scene)
        this.updateBody(Scene)
        if (food.contain(this.hitbox)) {
            this.velocityIncrease()
            food.setPosition(800, 600)
            this.addBody(Scene)
        }
    }
}