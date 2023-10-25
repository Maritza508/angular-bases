import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
<h1>{{ title }}</h1>
<hr>
<h2>Counter: {{ counter }}</h2>
<button (click)="increaseBy(+1)">Add+</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="increaseBy(-1)">Deduct-</button>`
})
export class CounterComponent{
  public title: string = "Hello world :)";
  public counter: number = 0;

  increaseBy( value: number): void{
      this.counter += value;
  };

  resetCounter(): void{
    this.counter = 0;
  };
}
