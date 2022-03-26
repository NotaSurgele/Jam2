import Food from "./food.js";
import Player from "./player.js"

export default class SnakeGame extends Phaser.Scene
{
    UP = 0;
    RIGHT = 1;
    DOWN = 2;
    LEFT = 3;
    player = new Player();
    food = new Food();
    direction = 1;

    preload()
    {
        this.direction = this.RIGHT;
        this.load.image('sky', 'http://labs.phaser.io/assets/skies/deepblue.png');
        this.food.preload(this)
        this.player.preload(this)
    }

    create()
    {
        this.add.image(400, 300, 'sky');
        this.food.create(this)
        this.player.create(this)
    }

    update()
    {
        this.player.update(this, this.food)
        this.food.update(this)
    }
}