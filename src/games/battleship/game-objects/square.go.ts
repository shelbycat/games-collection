import { Scene } from "phaser";
import { imagePaths } from "../asset-loaders";

export class SquareGameObject extends Phaser.GameObjects.Sprite {
  static preload(scene: Scene): void {
    // scene.load.image("shipsAndMarkers", imagePaths.shipsAndMarkers);
    // scene.load.atlas("shipsAndMarkers", imagePaths.shipsAndMarkers,  )
  }
  constructor(scene: Scene) {
    super(scene, 0, 0, "square");
    scene.add.existing(this);
  }
}
