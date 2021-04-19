import "phaser";

const config: Phaser.Types.Core.GameConfig = {
  title: "Battleships",
  width: 800,
  height: 600,
  parent: "game",
  backgroundColor: "#18216D",
};

export class BattleshipGame extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    const myConfig = {
      title: "Battleships",
      width: 800,
      height: 600,
      parent: "game",
      backgroundColor: "#18216D",
    };
    Object.assign(myConfig, config);
    super(myConfig);
  }
}
