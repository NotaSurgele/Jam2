var config = {
    type: Phaser.AUTO,
    width: 0,
    height: 0,
    backgroundColor: 0x2C75FF,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let music = new Object()

function preload() {
    this.load.audio('music-jam', '../static/music/game-music.mp3')
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
}

function update()
{
}