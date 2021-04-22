import { Scene } from "phaser";
import { imagePaths } from "../asset-loaders";

export class BoardGameObject extends Phaser.GameObjects.Sprite {
  static preload(scene: Scene): void {
    scene.load.image("board", imagePaths.board);
  }
  constructor(scene: Scene) {
    super(scene, 0, 0, "board");
    scene.add.existing(this);
  }
}
