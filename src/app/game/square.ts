export class Square {
  constructor(private ctx: CanvasRenderingContext2D, private sizeX: number,
    private sizeY: number) {}

  draw(x: number, y: number) {
    this.ctx.fillRect(x, y, this.sizeX, this.sizeY);
  }

  move() {
    const max = this.ctx.canvas.height - 100;
    const canvas = this.ctx.canvas;
    let y = 0;
    const itval = setInterval(() => {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.draw(10, 20 + y);
      y += 10;
      if (y >= max) {
        clearInterval(itval);
      }
    }, 200);
  }
}

/* To stop a timer created by setInterval, you need to call
clearInterval and give it the identifier for the interval you
want to cancel. The id to use is the one that is
returned by setInterval, and this is why we need to store it. */