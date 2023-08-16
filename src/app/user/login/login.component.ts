import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustService } from 'src/app/services/cust.service';
import { UserLoginInfo } from 'src/app/user-login-info';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login:any;
  dataSaved=false;
  message:string;
  status:string;
  role:string;
  userData:string;

  
  constructor(private fb:FormBuilder,private router:Router,private service: CustService) {
   
   }

  public notValid = (controlName: string, errorName: string) =>{
    return this.login.controls[controlName].hasError(errorName);
    }

  ngOnInit(): void {
    this.login=this.fb.group({
     
      email:['',Validators.required],
      password:['',Validators.required]

    })
  }
  onSubmit(logindata:NgForm){
    let UserLogin=this.login.value;
    this.userLogin(UserLogin);
    this.login.reset();
  }
  userLogin(loginInfo:UserLoginInfo){
    this.service.userLogin(loginInfo).subscribe({next:(result:any)=>{
      let resObj=JSON.stringify(result);
      console.log(resObj);
       this.dataSaved = true;
       this.message = result['msg'];
       this.status = result['status'];
       this.userData = result['UserData']
       if(result['status']=='success'){
       localStorage.setItem('Loginuser',resObj)
       if(result['UserData'].role=='Author'){
        this.router.navigate(['/userNav'])
      }else{
        this.router.navigate(['/adminList'])
      }
       }
       
       
      //  else{
      //   localStorage.removeItem('Loginuser');
      // }
      
      this.login.reset();

    } })
    
  }

}
