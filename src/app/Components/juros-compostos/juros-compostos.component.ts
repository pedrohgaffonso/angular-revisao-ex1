import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-compostos',
  templateUrl: './juros-compostos.component.html',
  styleUrls: ['./juros-compostos.component.css'],
})
export class JurosCompostosComponent implements OnInit {
  public c: number = 100;
  public i: number = 0.01;
  public t: number = 5;

  constructor() {}

  ngOnInit() {}

  getInterests() {
    return this.c * Math.pow(1 + this.i, this.t);
  }
}
