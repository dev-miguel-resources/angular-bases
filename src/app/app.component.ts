import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';
  msg: string = 'Prop emitida desde el padre';
  result: number = 0;
  retrieveSum(e: number) {
    this.result = e;
  }
}
