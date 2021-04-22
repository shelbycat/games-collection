import { Scene } from "phaser";

/** Hooks into the scene's lifecycle */
export class SKGameObject {
  /** Initializes the scene (startup) */
  static init(scene: Scene): void {}
  /** Loads assets into the scene */
  static preload(scene: Scene): void {}

  constructor(public scene: Scene) {}
  initialize(options: any): void {}
  update(): void {}
  destroy(): void {}
}
