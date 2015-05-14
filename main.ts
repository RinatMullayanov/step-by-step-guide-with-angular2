/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
//The @Component annotation defines the HTML tag for the component by specifying the component's CSS selector
@Component({
  selector: 'my-app'
})
//The @View annotation defines the HTML that represents the component. The component you wrote uses an inline template, but you can also have an external template.
//To use an external template, specify a templateUrl property and give it the path to the HTML file.
@View({
  template: '<h1>My first Angular 2 App</h1>'
})
class AppComponent {

}

bootstrap(AppComponent);
