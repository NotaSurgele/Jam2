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
    music = new Object()

    preload()
    {
        this.direction = this.RIGHT;
        this.load.image('sky', 'http://labs.phaser.io/assets/skies/deepblue.png');
        this.food.preload(this)
        this.player.preload(this)
        this.load.audio('jam', '../static/music/Jam.mp3')
    }

    create()
    {
        this.add.image(400, 300, 'sky');
        this.food.create(this)
        this.player.create(this)
        this.scoreText = this.add.text(10, 10, 'score : 0',
            { fontSize: '32px', fill: '#000'})
        this.music = this.sound.add("jam")
        let musicConfig = {
        mute: false,
        loop: true,
        delay: 0
        }
        this.music.play()
    }

    update()
    {
        this.player.update(this, this.food)
        this.food.update(this)
        this.scoreText.setText('Score: ' + this.player.getScore())
    }
}