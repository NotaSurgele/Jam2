import SnakeGame from "./game.js"

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
    scene : [SnakeGame]
};

let Game = new Phaser.Game(config);
