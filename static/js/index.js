import Game from "./Game.js"

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [ Game ]
};

var game = new Phaser.Game(config);
