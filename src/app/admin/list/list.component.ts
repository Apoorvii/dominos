import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/pizza';
import { CustService } from 'src/app/services/cust.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  pizzas:Pizza[]

  imgUrl='../../../assets/list/46.jpg'

  isLoggdIn=true;
  constructor(private router:Router,private cusservice:CustService) {
    if(localStorage.getItem('Loginuser')){
      this.isLoggdIn=true;
    }
   }

  ngOnInit(): void {
    this.getPizza()
  }

  getPizza(){
       this.cusservice.getAllPizza().subscribe({next:(result:any)=>{
           this.pizzas=result['msg']
       }})
  }



  
  
  OnLogOut(){
    localStorage.removeItem('Loginuser');
    this.isLoggdIn=false
    this.router.navigate(['/'])
  }

  deletePizza(pizza: any){
      
  }

}
