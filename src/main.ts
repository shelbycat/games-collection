import "~/web-container/main"
import { BattleshipGame } from "games/battleship"

const gameConfig = {
  parent: "game",
}

window.onload = () => {
  var game = new BattleshipGame(gameConfig)
}
