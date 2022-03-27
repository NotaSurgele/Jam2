import Food from "./food.js";
import Player from "./player.js"

export default class SnakeGame extends Phaser.Scene
{
    UP = 0
    RIGHT = 1
    DOWN = 2
    LEFT = 3
    player = new Player()
    food = new Food()
    direction = 1
    scoreText
    music

    preload()
    {
        this.direction = this.RIGHT;
        this.load.image('sky', 'http://labs.phaser.io/assets/skies/deepblue.png');
        this.food.preload(this)
        this.player.preload(this)
        // Game.Game.load.audio('music', '../static/music/game-music.mp3')
    }

    create()
    {
        this.add.image(400, 300, 'sky');
        this.food.create(this)
        this.player.create(this)
        this.scoreText = this.add.text(10, 10, 'score : 0',
            { fontSize: '32px', fill: '#000'})
        // music = Game.Game.add.audio('music')
        // this.music.play()
    }

    update()
    {
        this.player.update(this, this.food)
        this.food.update(this)
        this.scoreText.setText('Score: ' + this.player.getScore())
    }
}