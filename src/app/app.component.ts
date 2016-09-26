import { Component } from '@angular/core';
import { User } from './user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "this is my title";
  user:User

  constructor(){
    this.user = new User();
    this.user.name = "Josh";
    this.user.age = 30
    this.user.weight = 50;
    this.user.height = 70;

  }

}
