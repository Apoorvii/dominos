import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pizza } from '../pizza';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  url ='http://localhost:8000';
  constructor(private http:HttpClient) { }

  addPizza(pizzas:Pizza):Observable<Pizza>{
    return this.http.post<Pizza>(`${this.url}/addPizza`,pizzas)
   }
   
   addtocart(body:any){
    return this.http.post(`${this.url}/addToCart`,body)
   }
}
