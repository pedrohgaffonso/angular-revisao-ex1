import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-simples',
  templateUrl: './juros-simples.component.html',
  styleUrls: ['./juros-simples.component.css'],
})
export class JurosSimplesComponent implements OnInit {
  public c: number = 100;
  public i: number = 0.01;
  public t: number = 5;

  constructor() {}

  ngOnInit() {}

  getInterests() {
    return this.c * (1 + this.i * this.t);
  }
}
