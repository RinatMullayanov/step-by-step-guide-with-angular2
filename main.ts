/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
// sample import another user component thanks to http://stackoverflow.com/questions/29121678/angular-2-component-inside-main-component
import {DisplayComponent} from './show-properties';
import {TodoListComponent} from './todo';

//The @Component annotation defines the HTML tag for the component by specifying the component's CSS selector
@Component({
  selector: 'my-app'
})
//The @View annotation defines the HTML that represents the component. The component you wrote uses an inline template, but you can also have an external template.
//To use an external template, specify a templateUrl property and give it the path to the HTML file.
@View({
  templateUrl: './layout.html',
  directives: [
    DisplayComponent, // some user component
    TodoListComponent // another user component
  ]
})
class AppComponent {

}

bootstrap(AppComponent);
