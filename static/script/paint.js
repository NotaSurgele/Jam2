var config = {
    width: 1200,
    height: 1000,
    backgroundColor: 0x2C75FF,
    scene: {
        preload: preload,
        create: create,
        changeColor: changeColor
    }
};

var canvas = {
    width: 800,
    height: 600,
    backgroundColor: 0xEBFAFA
};

var game = new Phaser.Game(config);
//var paper = new Phaser.Game(canvas)
//var text = Phaser.Create.Text(game, 100, 100, "Paint", {font: "25xp Arial", fill: "yellow"});

function init() {

}

function preload() {

}

function changeColor() {

    var color = Phaser.Color.getRandomColor(10, 0, 255);

    game.stage.backgroundColor = color;
    game.fd.record(4);
}

function create() {
    //this.add.Text(game, 100, 100, "Paint", {font: "25xp Arial", fill: "yellow"});
    var paper = this.add.rectangle(450, 350, 800, 600, 0xEBFAFA);
    if (game.input.onDown)
        changeColor();
}

//function update() {
//
//}

