import "phaser"
import { MainScene } from "./main-scene"

const config: Phaser.Types.Core.GameConfig = {
  title: "Battleships",
  width: 800,
  height: 600,
  parent: "game",
  backgroundColor: "#18216D",
}

export class BattleshipGame extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    const defaultConfig = {
      width: 800,
      height: 600,
      parent: "game",
    }
    const myConfig = {
      title: "Battleships",
      backgroundColor: "#18216D",
      scene: [MainScene],
    }
    Object.assign(defaultConfig, config, myConfig)
    super(defaultConfig)
  }
}
