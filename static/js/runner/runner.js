import RunnerGame from "./game.js"

let config = {
    type : Phaser.AUTO,
    width: 928,
    height: 793,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: false
        }
    },
    scene : [RunnerGame]
};

let Game = new Phaser.Game(config);

