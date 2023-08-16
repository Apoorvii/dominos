import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../user-info';
import { map, Observable } from 'rxjs';
import { UserLoginInfo } from '../user-login-info';
import { Pizza } from '../pizza';

@Injectable({
  providedIn: 'root'
})
export class CustService {
 
  // readonly ROOT_URL:any;
  url ='http://localhost:8000';
  constructor(private http :HttpClient) {
   
   }

  createUserAccount(registr:UserInfo):Observable<UserInfo>{
   return this.http.post<UserInfo>(`${this.url}/register`,registr)
  }

 userLogin(loginInfo:UserLoginInfo):Observable<UserLoginInfo>{
  return this.http.post<UserLoginInfo>(`${this.url}/login`,loginInfo)
 }

//  getAllPizza(pizzaInfo:Pizza):Observable<Pizza>{
//   return this.http.post<Pizza>(`${this.url}/getAllPizza`,pizzaInfo)
  
//  }
getAllPizza(){
  return this.http.get(`${this.url}/getAllPizza`)
  
 }
}
