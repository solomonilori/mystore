import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Olumide Store';
  buttonText ='Click Me';
  theProducts = ['Shoes','Shirts','Wrist Watches'];

  greetings(theName:string){
    alert(`Welcome ${theName}, 
    to the world of Angular`);
    this.changeButtonText();
  }

  changeButtonText(){
    this.buttonText = 'Thank you for clicking on me';
  }
}
