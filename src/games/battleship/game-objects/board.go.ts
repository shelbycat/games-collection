import { Scene } from "phaser";

export class BoardGameObject extends Phaser.GameObjects.Sprite {
  constructor(scene: Scene) {
    super(scene, 0, 0, "board");
    scene.add.existing(this);
  }
}
