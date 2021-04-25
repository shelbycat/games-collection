import { preload as preloadAssets } from "./asset-loaders";
import { BoardGameObject } from "./game-objects/board.go";
import { SquareGameObject } from "./game-objects/square.go";

export class MainScene extends Phaser.Scene {
  width: number;
  height: number;
  constructor() {
    super({
      key: "MainScene",
    });
  }
  init(params): void {
    // TODO
  }
  preload(): void {
    preloadAssets(this);
    // TODO
  }

  create(): void {
    this.width = this.sys.game.canvas.width;
    this.height = this.sys.game.canvas.height;

    let background = this.add.image(0, 0, "background");
    background.setOrigin(0, 0);
    background.scale = Math.max(
      this.width / background.width,
      this.height / background.height
    );
    // TODO

    let center = { x: this.width / 2, y: this.height / 2 };
    let board = new BoardGameObject(this);
    console.log(board instanceof Phaser.GameObjects.Sprite);
    board.scale = 1.3;
    board.setPosition(center.x, center.y);

    var atlasTexture = this.textures.get("shipsAndMarkersAtlas");
    var frames = atlasTexture.getFrameNames();

    let x: number = 200;
    frames.forEach((name) => {
      let y = this.height / 2;
      x += 40;
      console.log(name);
      let sprite = this.add.sprite(x, y, "shipsAndMarkersAtlas", name);
    });
  }
  update(time): void {
    // TODO
  }
}
