/// <reference path="./typings/angular2/angular2.d.ts"/>
import {Component, View, bootstrap, For} from 'angular2/angular2';
import {FriendsService} from './FriendsService';

@Component({
  selector: 'display',
  injectables: [FriendsService]
})
@View({
  templateUrl: './display.html',
  directives: [For]
})
export class DisplayComponent {
  myName: string;
  names: string[];

  constructor(friendsService: FriendsService) {
    this.myName = 'Alice';
    this.names = friendsService.names;
  }
}
