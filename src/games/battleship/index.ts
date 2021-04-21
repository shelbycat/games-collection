import "phaser";
import { MainScene } from "./main-scene";

const config: Phaser.Types.Core.GameConfig = {
  title: "Battleships",
  width: 1024,
  height: 576,
  parent: "game",
  backgroundColor: "#18216D",
};

export class BattleshipGame extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    const defaultConfig: Phaser.Types.Core.GameConfig = {
      width: 1024,
      height: 576,
      parent: "game",
    };
    const myConfig = {
      title: "Battleships",
      backgroundColor: "#18216D",
      scene: [MainScene],
    };
    Object.assign(defaultConfig, config, myConfig);
    super(defaultConfig);
  }
}
