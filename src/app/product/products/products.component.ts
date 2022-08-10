import { IProduct } from 'src/app/entitites/product.entity';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {GridFilterPipe} from 'src/app/core/gridFilter.pipe'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private imagePath: string;
  products!: IProduct [];
  isProdImgVisible: boolean = true;
  prodButton: string = "Hide";
  searchText: string = "";
  prodImgHeight: number = 100;
  prodImgWidth: number = 70;
  message: string = "";
  messageColor: string = "";
  isPurchaseAllowed: boolean = true;
  constructor() {
    this.imagePath = "/assets/productImages/";

  }

  ngOnInit(): void {
    this.products = this.getProducts();
    console.log(this.products);
  }


  getProducts(): IProduct[] {
    return [
      {
        Id: 1,
        Title: "Bat",
        Price: 2500,
        InStock: true,
        Quantity: 2000,
        Color: "Brown",
        Agency: "Spartan",
        Image: this.imagePath + 'Bat.png',
        PurchaseQuantity: 0
      },
      {
        Id: 2,
        Title: "Ball",
        Price: 1200,
        InStock: true,
        Quantity: 10,
        Color: "Red",
        Agency: "TAURO ZING",
        Image: this.imagePath + 'Ball.png',
        PurchaseQuantity: 0
      },
      {
        Id: 3,
        Title: "Gloves",
        Price: 500,
        InStock: true,
        Quantity: 800,
        Color: "Blue",
        Agency: "SG Hilite",
        Image: this.imagePath + 'Gloves.png',
        PurchaseQuantity: 0
      },
      {
        Id: 4,
        Title: "Helmet",
        Price: 2000,
        InStock: true,
        Quantity: 200,
        Color: "Red",
        Agency: "Shrey",
        Image: this.imagePath + 'Helmet.png',
        PurchaseQuantity: 0
      },
      {
        Id: 5,
        Title: "Pads",
        Price: 1000,
        InStock: true,
        Quantity: 20,
        Color: "Green",
        Agency: "Reebok",
        Image: this.imagePath + 'Pads.png',
        PurchaseQuantity: 0
      },
      {
        Id: 6,
        Title: "Cap",
        Price: 550,
        InStock: true,
        Quantity: 100,
        Color: "Blue",
        Agency: "Reebok",
        Image: this.imagePath + 'Cap.png',
        PurchaseQuantity: 0
      },
      {
        Id: 7,
        Title: "Stumps",
        Price: 700,
        InStock: true,
        Quantity: 55,
        Color: "Magenta",
        Agency: "GM",
        Image: this.imagePath + 'Stumps.png',
        PurchaseQuantity: 0
      }
    ]
  }

displayProductImage() {
  this.isProdImgVisible = !this.isProdImgVisible;
  this.prodButton = this.isProdImgVisible ? "Hide" : "Show";
}
onPurchaseProduct(product: IProduct) {
  if (product.PurchaseQuantity <= 0 || product.PurchaseQuantity > product.Quantity) {
    this.message = "Please retry with correct Product Quantity";
    this.messageColor = "Red";
  }
  else {
    this.messageColor = "Green";
    let item = this.products.filter(i => i.Id == product.Id)[0];

    let totalPrice = product.Price * product.PurchaseQuantity;

    item.Quantity = product.Quantity - product.PurchaseQuantity;
    item.PurchaseQuantity = product.PurchaseQuantity;
    this.message = "Congratulations to purchase " + product.PurchaseQuantity +" "+ product.Title + "for total Cost " + totalPrice;

  }
}
}
