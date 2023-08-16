import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustService } from 'src/app/services/cust.service';
import { UserInfo } from 'src/app/user-info';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register:any;
  dataSaved=false;
  message:string;
  constructor(private fb:FormBuilder,private Router:Router,private service:CustService,public dialog :MatDialog) {
    
   }

   public notValid = (controlName: string, errorName: string) =>{
    return this.register.controls[controlName].hasError(errorName);
    }
  imgUrl='../../../assets/images/main1.jpg'

  ngOnInit(): void {  
    this.register=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      number:['',Validators.required],
      password:['',Validators.required],
      cpassword:['',Validators.required]

    })
  }
  onSubmit(){
     console.log(this.register.value)
    
     let registeredData=this.register.value;
     this.createUserAccount(registeredData);
     this.register.reset();
     
     
  }
createUserAccount(userInfo:UserInfo){
  this.service.createUserAccount(userInfo).subscribe({next:()=>{
      this.dataSaved=true;
      this.message="User Created";
      this.register.reset();
      let dailogref= this.dialog.open(DialogComponent);

      // this.Router.navigate(['/login'])
  }})
}
 
}

