import { Colors } from "../Colors";
import { Cell } from "../Cell";
import logo from "../../assets/black-king.png";

export enum FigureName {
  FIGURE = "figure",
  KING = "king",
  KNIGHT = "knight",
  PAWN = "pawn",
  QUEEN = "queen",
  ROOK = "rook",
  BISHOP = "bishop",
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureName;
  id: number | string;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureName.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) {
      return false;
    }
    return target.figure?.name !== FigureName.KING;

  }

  moveFigure(target: Cell) {}
}
