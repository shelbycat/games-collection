import "phaser";
import { MainScene } from "./main-scene";

export class BattleshipGame extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    const defaultConfig: Phaser.Types.Core.GameConfig = {
      width: 1024,
      height: 576,
      parent: "game",
    };
    const myConfig: Phaser.Types.Core.GameConfig = {
      title: "Battleships",
      backgroundColor: "#18216D",
      scene: [MainScene],
      physics: {
        arcade: {
          debug: true,
        },
      },
    };
    Object.assign(defaultConfig, config, myConfig);
    super(defaultConfig);
  }
}
