import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/pizza';
import { CartService } from 'src/app/services/cart.service';
import { CustService } from 'src/app/services/cust.service';
import { ToastrService} from 'ngx-toastr'


@Component({
  selector: 'app-view-pizza',
  templateUrl: './view-pizza.component.html',
  styleUrls: ['./view-pizza.component.scss']
})
export class ViewPizzaComponent implements OnInit {

  pizzas:Pizza[];
  isLoggdIn=true;
  constructor(private router:Router,private service:CustService,private cartService:CartService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getPizza()
  }
  getPizza(){
    this.service.getAllPizza().subscribe({next:(result:any)=>{
        this.pizzas=result['msg']
    }})
  }
  OnLogOut(){
    localStorage.removeItem('Loginuser');
    this.isLoggdIn=false
    this.router.navigate(['/'])
  }
 
 
}
