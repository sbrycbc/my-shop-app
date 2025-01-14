import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from './product.model';
import { Category } from './category.model';
import { Order } from './order.model';

@Injectable()
  
export class RestService {

  baseUrl: string = "http://localhost:3500/";
  token: string | undefined | null = null

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products'); 
  }
  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + 'categories');
  }
  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + 'orders', order)
  }
  authentication(username: string, password: string): Observable<boolean>{
    return this.http.post<any>(this.baseUrl + 'login',  {
      username: username,
      password: password
    }).pipe(map(response => {
      this.token = response.success ? response.token : null;
      console.log(this.token);
      return response.success;      
    }));
  }
}
