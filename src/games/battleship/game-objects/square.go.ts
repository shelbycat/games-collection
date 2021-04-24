import { Scene } from "phaser";

export class SquareGameObject extends Phaser.GameObjects.Sprite {
  static preload(scene: Scene): void {}
  constructor(scene: Scene) {
    super(scene, 0, 0, "square");
    scene.add.existing(this);
  }
}
