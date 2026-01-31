import Phaser from 'phaser';

export default class QuestScene extends Phaser.Scene {
    constructor() {
        super('QuestScene');
    }

    create() {
        this.add.text(200, 200, 'Mini-game here!', { fontSize: '32px', fill: '#000' });

        //Back to the City
        this.time.delayedCall(3000, () => {
            this.scene.start('CityScene');
        });
    }
}
