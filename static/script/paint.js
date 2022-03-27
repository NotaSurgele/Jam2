var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 1000,
    parent: 'phaser-example',
    backgroundColor: 0x2C75FF,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var color = 0x0643C7;

function preload() {
}

function create() {
    let s = 10;
    var cl = new Phaser.Geom.Circle(1100, 150, 20);
    var circle = new Phaser.Geom.Circle(0, 0, s, color);
    var rect = new Phaser.Geom.Rectangle(100, 100, 800, 600, 0x05008B);
    this.add.rectangle(500, 400, 800, 600, 0xEBFAFA);
    var sgraphic = this.add.graphics({fillStyle: {lineWidth: 9, color: 0x05008B}, lineStyle: {color: 0x05008B}});
    var graphics = this.add.graphics();

    sgraphic.lineStyle(4, 0x05008B);
    sgraphic.strokeRectShape(rect);
    graphics.setSi
    graphics.lineStyle(6, 0x05008B);
    graphics.fillStyle(0x1EF7FF);
    graphics.strokeCircleShape(cl);
    graphics.fillCircleShape(cl);

    this.input.on('pointermove', function (pointer) {
        if (Phaser.Geom.Circle.Contains(cl, pointer.x, pointer.y)) {
            if (pointer.isDown)
                location.reload();
        }
        if (pointer.isDown && Phaser.Geom.Rectangle.Contains(rect, pointer.x, pointer.y)) {
            graphics.lineStyle(1, color);
            if (pointer.x < 100 + (2 * s) || pointer.y < 100 + (2 * s)) {
                circle.setPosition(pointer.x + s, pointer.y + s);
            } else {
                circle.setPosition(pointer.x - s, pointer.y - s);
            }
            graphics.strokeCircleShape(circle);
        }
    }, this);
}

function update() {

}