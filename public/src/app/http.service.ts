import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  addProductService(product) {
    console.log("In addProductService in http.service.ts");
    return this._http.post('/create', product);
  }
}
