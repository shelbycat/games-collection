import { Scene } from "phaser";
import starBackground from "~bts/assets/background_stars_04.png";
import board from "~bts/assets/board_01.png";
import shipsAndMarkers from "~bts/assets/ships_and_markers_01.png";
import shipsAndMarkersAtlas from "~bts/assets/ships_and_markers_01.json";

export function preload(scene: Scene) {
  scene.load.setBaseURL("");
  scene.load.image("board", board);
  scene.load.image("background", starBackground);
  scene.load.image("shipsAndMarkers", shipsAndMarkers);
  // scene.load.image("shipsAndMarkers", imagePaths.shipsAndMarkers);
  scene.load.atlas(
    "shipsAndMarkersAtlas",
    shipsAndMarkers,
    shipsAndMarkersAtlas
  );
}
