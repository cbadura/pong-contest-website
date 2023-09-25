import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Square } from './square';

@Component({
  selector: 'tcd-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;  
  
  private ctx!: CanvasRenderingContext2D;

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;
    this.ctx.fillStyle = 'red';
    const square = new Square(this.ctx);
    square.draw(10, 20, 50, 50);
  }
  
  play(): void {}
}
