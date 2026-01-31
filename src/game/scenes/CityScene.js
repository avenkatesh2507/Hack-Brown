import Phaser from 'phaser';

export default class CityScene extends Phaser.Scene {
    constructor() {
        super('CityScene');
    }

    preload() {
        this.load.image('player', '/sprites/sprite1.png');
        this.load.image('building', '/sprites/building.png');
        this.load.image('tree', '/sprites/tree.png');
        this.load.image('quest', '/sprites/quest.png');
    }

    create() {
        // Decor
        this.add.image(480, 270, 'building'); 
        this.add.image(300, 400, 'tree');     

        // Sprite set
        this.player = this.physics.add.sprite(100, 100, 'player');
        this.player.setCollideWorldBounds(true);

        // Quest 
        this.questMarkers = [];
        this.questMarkers.push(this.physics.add.sprite(800, 400, 'quest'));
        this.questMarkers.push(this.physics.add.sprite(600, 200, 'quest'));

        // Keyboard
        this.cursors = this.input.keyboard.createCursorKeys();

        // Quest Trigger
        this.questMarkers.forEach(marker => {
            this.physics.add.overlap(this.player, marker, () => {
                this.scene.start('QuestScene');
            });
        });
    }

    update() {
        // Rest vel
        this.player.setVelocity(0);

        if (this.cursors.left.isDown) this.player.setVelocityX(-200);
        if (this.cursors.right.isDown) this.player.setVelocityX(200);
        if (this.cursors.up.isDown) this.player.setVelocityY(-200);
        if (this.cursors.down.isDown) this.player.setVelocityY(200);
    }
}

