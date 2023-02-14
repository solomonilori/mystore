import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Olumide Store';
  buttonText ='Click Me';
  theProducts: Product[] = [];
  
  ngOnInit(): void {
    this.getProducts();
  }

  greetings(theName:string){
    alert(`Welcome ${theName}, 
    to the world of Angular`);
    this.changeButtonText();
  }

  changeButtonText(){
    this.buttonText = 'Thank you for clicking on me';
  }

  getProducts(){
    this.theProducts.push(
      {
        id:1,
        productName: 'Leather Shoe',
        category: 'Shoes',
        price: 2000,
        outOfStock: false
      },
      {
        id:2,
        productName: 'Tenis',
        category: 'Shoes',
        price: 3000,
        outOfStock: false
      },
      {
        id:3,
        productName: 'Cardigan',
        category: 'Clothes',
        price: 1000,
        outOfStock: false
      },
      {
        id:4,
        productName: 'White Shirt',
        category: 'Shoes',
        price: 4000,
        outOfStock: true
      }
    )
  }
}
