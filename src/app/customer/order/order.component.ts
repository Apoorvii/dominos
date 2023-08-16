import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CustService } from 'src/app/services/cust.service';
import { ToastrService} from 'ngx-toastr'
import { Pizza } from 'src/app/pizza';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  pizzas:Pizza[]
  isLoggdIn=true;
  constructor(private router:Router,private service:CustService,private cartService:CartService,private toastr:ToastrService,private custService:CustService) { }

  ngOnInit(): void {
    this.getPizza()
  }

  getPizza(){
    this.custService.getAllPizza().subscribe({next:(result:any)=>{
        this.pizzas=result['msg']
    }})
  }

  OnLogOut(){
    localStorage.removeItem('Loginuser');
    this.isLoggdIn=false
    this.router.navigate(['/'])
  }

  
  }

  // addToCart(pizzaInfo:Pizza){
  
  //   if(pizzaInfo.qnty===1){
  //     this.cartService.addPizzaToCart(pizzaInfo).subscribe({next:(data:any)=>{
  //       console.log(data);
  //     }})
  //   }
  // }

