import Phaser from 'phaser';
import CityScene from './scenes/CityScene';
import QuestScene from './scenes/QuestScene';

const config= {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    parent: 'game-container',
    transparent: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false

        }
    
    },
    scene: [CityScene, QuestScene]
};
export default config;
