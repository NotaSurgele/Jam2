var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 1000,
    parent: 'phaser-example',
    backgroundColor: 0x2C75FF,
    scene: {
        preload: preload,
        create: create,
        update: update,
        changeColor: changeColor
    }
};

var game = new Phaser.Game(config);
//var paper = new Phaser.Game(canvas)
//var text = Phaser.Create.Text(game, 100, 100, "Paint", {font: "25xp Arial", fill: "yellow"});

function init() {

}

function preload() {
    this.load.image('brush', '../static/assets/brush3.png');
}

function create() {
    //this.add.Text(game, 100, 100, "Paint", {font: "25xp Arial", fill: "yellow"});
    var paper = this.add.rectangle(450, 350, 800, 600, 0xEBFAFA);

    //var rt = this.add.renderTexture(0, 0, 1200, 1000);
    let s = 5;
    var circle = new Phaser.Geom.Circle(0, 0, s, 0x0643C7);

    var graphics = this.add.graphics();

    this.input.on('pointermove', function (pointer) {
        if (pointer.isDown) {
            graphics.lineStyle(1, 0x0643C7);
            //rt.draw('brush', pointer.x - 32, pointer.y - 32);
            circle.setPosition(pointer.x - s, pointer.y - s);
            graphics.strokeCircleShape(circle);
        }
    }, paper);
}

function update() {

}

function changeColor() {

    var color = Phaser.Color.getRandomColor(10, 0, 255);

    game.stage.backgroundColor = color;
    game.fd.record(4);
}