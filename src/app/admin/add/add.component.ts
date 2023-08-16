import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/pizza';
import { CartService } from 'src/app/services/cart.service';
import { CustService } from 'src/app/services/cust.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
 
  pizzas:any;
  isLoggdIn=true;

  dataSaved=false;
  message:string;
  status:string;
  pizzaData:string;
  // image: { value: any; };

  constructor(public router:Router,private fb:FormBuilder,private http:HttpClient,private service:CustService,private cartservice:CartService) { }
  imgUrl='../../../assets/list/46.jpg'

  file:any;
  ngOnInit(): void {
    this.pizzas=this.fb.group({
      pizzaname:['',Validators.required],
      pizzasize:['',Validators.required],
      price:['',Validators.required],
      image:['',Validators.required],

    })
  }
  
  get pizzaname(){
    return this.pizzas.get('pizzaname')
  }
  get pizzasize(){
    return this.pizzas.get('pizzasize')
  }
  get price(){
    return this.pizzas.get('price')
  }
  get image(){
    return this.pizzas.get('image')
  }
  
  selectImage(event:any){
    
    if(event.target.files.length > 0){
      const file=event.target.files[0];
     this.pizzas.image=file.name;
    }
    }

  public notValid = (controlName: string, errorName: string) =>{
    return this.pizzas.controls[controlName].hasError(errorName);
    }

  OnLogOut(){
    localStorage.removeItem('Loginuser');
    this.isLoggdIn=false
    this.router.navigate(['/'])
  }
  

  onSubmit(){

    console.log(this.image.value)
    // const formData=new FormData()
    //   const image=formData.append('file',this.image.value)
    //   const pizzaname=formData.append('pizzaname',this.pizzaname.value)
    //   const pizzasize=formData.append('pizzasize',this.pizzasize.value)
    //   const price=formData.append('price',this.price.value)
    const formdata={
      pizzaname: this.pizzaname.value,
      pizzasize:this.pizzasize.value,
      price:this.price.value,
      image:this.image.value

    }
    
    // const jsonOb=JSON.stringify(FormData);
    
    // this.http.post<any>('http://localhost:8000/addPizza',formData).subscribe({next:(result:any)=>{
    //   this.router.navigate(['/adminList'])
    // }})
this.cartservice.addPizza(formdata).subscribe({next:(result:any)=>{
  this.router.navigate(['/adminList'])
}})
  
  }
}
