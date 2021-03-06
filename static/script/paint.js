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
var size;
let s = 10;
let music = new Object()

function preload() {
    this.load.audio('music-jam', '../static/music/Jam_V2.mp3')
}

function create() {
    // add the music -----------------
    music = this.sound.add("music-jam")
    let musicConfig = {
    mute: false,
    loop: true,
    delay: 0
    }
    music.play()
    // -------------------------------

    let swap = 1;
    var d = 110;
    var col = new Array();
    var palette = new Array();
    var circle = new Phaser.Geom.Circle(0, 0, s, color);
    var rect = new Phaser.Geom.Rectangle(100, 100, 800, 600, 0x05008B);
    this.add.rectangle(500, 400, 800, 600, 0xEBFAFA);
    var tol = this.add.rectangle(1040, 400, 200, 600, 0xEBFAFA);
    var cl = new Phaser.Geom.Circle(1100, 150, 20);
    var cir = new Phaser.Geom.Circle(1100, 200, 20);
    var cirv = new Phaser.Geom.Circle(1100, 250, 20);
    var up = new Phaser.Geom.Triangle(1100, 300, 1070, 330, 1130, 330);
    var down = new Phaser.Geom.Triangle(1130, 400, 1070, 400, 1100, 430);
    var pal = this.add.rectangle(500, 850, 800, 100, 0xEBFAFA);
    var sgraphic = this.add.graphics({fillStyle: {lineWidth: 9, color: 0x05008B}, lineStyle: {color: 0x05008B}});
    var graphics = this.add.graphics();
    var graphict = this.add.graphics({fillStyle: {lineWidth: 9, color: 0x05008B}, lineStyle: {color: 0x05008B}});

    this.add.text(940, 60, 'TOOLS', { fontSize: '32px', fill: '#0F1154'});
    this.add.text(950, 135, 'Clear', { fontSize: '32px', fill: '#00BCFF'});
    this.add.text(950, 190, 'Full', { fontSize: '32px', fill: '#00BCFF'});
    this.add.text(950, 235, 'Empty', { fontSize: '32px', fill: '#00BCFF'});
    this.add.text(950, 350, 'Size', { fontSize: '32px', fill: '#00BCFF'});
    size = this.add.text(1080, 350, s, { fontSize: '32px', fill: '#05008B'});
    this.add.text(100, 750, 'PALETTE', { fontSize: '32px', fill: '#0F1154'});

    col[0] = 0xDCF8FF;
    col[1] = 0x709BFF;
    col[2] = 0x00FFFF;
    col[3] = 0x96DAF3;
    col[4] = 0x97BAE2;
    col[5] = 0xC3E4ED;
    col[6] = 0x65B2F6;
    col[7] = 0x6A65F6;
    col[8] = 0x3232CC;
    col[9] = 0x2E37FE;
    col[10] = 0x3300FF;
    col[11] = 0x6CA6CD;
    col[12] = 0x007FFF;
    col[13] = 0x1100FF;
    col[14] = 0x4D4DFF;
    col[15] = 0x0883B0;
    col[16] = 0x1F7CCE;
    col[17] = 0x3A5FCD;
    col[18] = 0x1E24BD;
    col[19] = 0x050983;

    for (var i = 0; i < 20; i++) {
        palette[i] = new Phaser.Geom.Rectangle(d, 840, 20, 20);
        graphics.fillStyle(col[i]);
        graphics.lineStyle(4, 0x05008B);
        graphics.fillRectShape(palette[i]);
        graphics.strokeRectShape(palette[i]);
        d = d + 40;
    }

    pal.setStrokeStyle(4, 0x05008B);
    tol.setStrokeStyle(4, 0x05008B);
    sgraphic.lineStyle(4, 0x05008B);
    sgraphic.strokeRectShape(rect);
    graphics.fillCircleShape(cir);
    graphics.strokeCircleShape(cirv)
    graphics.lineStyle(6, 0x05008B);
    graphics.fillStyle(0x1EF7FF);
    graphics.strokeCircleShape(cl);
    graphics.fillCircleShape(cl);
    graphict.fillTriangleShape(up);
    graphict.fillTriangleShape(down);

    this.input.on('pointerdown', function (pointer) {
        if (pointer.isDown && Phaser.Geom.Circle.Contains(cl, pointer.x, pointer.y))
                location.reload();
        if (pointer.isDown && Phaser.Geom.Circle.Contains(cir, pointer.x, pointer.y))
                swap = 1;
        if (pointer.isDown && Phaser.Geom.Circle.Contains(cirv, pointer.x, pointer.y))
                swap = 2;
        if (pointer.isDown && Phaser.Geom.Triangle.Contains(up, pointer.x, pointer.y))
            s = s + 1;
        if (pointer.isDown && Phaser.Geom.Triangle.Contains(down, pointer.x, pointer.y) && s > 1)
            s = s - 1;
        for (var i = 0; i < 20; i++) {
            if (pointer.isDown && Phaser.Geom.Rectangle.Contains(palette[i], pointer.x, pointer.y))
                color = col[i];
        }
    }, this);
    this.input.on('pointermove', function (pointer) {
        if (pointer.isDown && Phaser.Geom.Rectangle.Contains(rect, pointer.x, pointer.y)) {
            graphics.lineStyle(1, color);
            graphics.fillStyle(color);
            circle.radius = s;
            if (pointer.x < 100 + (2 * s) || pointer.y < 100 + (2 * s)) {
                circle.setPosition(pointer.x + s, pointer.y + s);
            } else {
                circle.setPosition(pointer.x - s, pointer.y - s);
            }
            if (swap == 1)
                graphics.fillCircleShape(circle);
            if (swap == 2)
                graphics.strokeCircleShape(circle);
        }
    }, this);
}

function update() {
    size.setText(s);
}