import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { IProduct } from '../model/product';
import * as CryptoJS from 'crypto-js'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService {

  tableName = 'Products';

  getProducts() {
    return this.connection.select<IProduct>({
      from: this.tableName
    });
  }

  addProduct(product: IProduct) {
    if(product.name != "" && product.price != ""){
    product.name = CryptoJS.AES.encrypt(product.name.trim(), product.price).toString();
    product.price = CryptoJS.AES.encrypt(product.price, product.name.trim()).toString();
}
    return this.connection.insert<IProduct>({
      into: this.tableName,
      return: true, 
      values: [product]
    });
  }
}
