export default class Food
{
    constructor() { }

    sprite = 0
    hitbox = 0

    preload(Scene)
    {
        Scene.load.image('food', '../static/images/blue_ball.png')
    }

    create(Scene)
    {
        this.sprite = Scene.physics.add.sprite(8.5, 8.5, 'food')
        this.hitbox = new Phaser.Geom.Rectangle(this.sprite.x, this.sprite.y, 17, 17)
        this.setPosition(750, 550)
    }

    setPosition(width, height)
    {
        let x = Math.random() * ((width - 10) - 10) + 10;
        let y = Math.random() * ((height - 10) - 10) + 10;

        this.sprite.setPosition(x, y)
        this.hitbox.x = x
        this.hitbox.y = y
        console.log(x, y)
    }

    contain(rectangle)
    {
        return Phaser.Geom.Rectangle.ContainsRect(rectangle, this.hitbox)
    }

    update()
    {
        this.sprite.update()
    }
}