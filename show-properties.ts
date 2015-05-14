/// <reference path="./typings/angular2/angular2.d.ts"/>
import {Component, View, bootstrap, For} from 'angular2/angular2';

@Component({
  selector: 'display'
})
@View({
  templateUrl: './display.html',
  directives: [For]
})
export class DisplayComponent {
  myName: string;
  names: string[];

  constructor() {
    this.myName = 'Alice';
    this.names = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
  }
}
