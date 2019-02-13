import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  toolProducts: any = []

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getToolProducts();
  }

  getToolProducts() {
    let observable = this._httpService.getToolProductsFromService();
    observable.subscribe((toolProducts) => {
      console.log(toolProducts)
      this.toolProducts = toolProducts;
    });
  }

  addToCart(id, toolProduct) {
    let observable = this._httpService.addToCartFromService(id, toolProduct);
    observable.subscribe((data) => {
      console.log(data)
    })
  }
}
