import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(increase: boolean): void {
    if (increase){
      this.counter +=1;
    } else {
      this.counter -=1;
    }
  }

  resetBy(): void{
    this.counter = 0;
  }

}
