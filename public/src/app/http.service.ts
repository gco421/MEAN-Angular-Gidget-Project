import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  addProductService(product) {
    console.log("In Service")
    return this._http.post('/create', product);
  }

  allProductsFromService() {
    return this._http.get('/gidget');
  }

  getToolProductsFromService() {
    return this._http.get('/tools');
  }

  getBestsellProductsFromService() {
    return this._http.get('/bestsellers');
  }

  getU20ProductsFromService() {
    return this._http.get('/u20s');
  }
  getSolarProductsFromService() {
    return this._http.get('/solars');
  }
  getWindUpProductsFromService() {
    return this._http.get('/windups');
  }
  getNewProductsFromService() {
    return this._http.get('/new');
  }

  addToCartFromService(id, toolProduct) {
    return this._http.post('/addToCart/' + id, toolProduct);
  }

  getCartFromService() {
    return this._http.get('/getCart');
  }
}
