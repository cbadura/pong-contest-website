export class Square {
  constructor(private ctx: CanvasRenderingContext2D) {}

  draw(x: number, y: number, sizeX: number, sizeY: number) {
    this.ctx.fillRect(x, y, sizeX, sizeY);
  }
}