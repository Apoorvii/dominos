import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.scss']
})
export class UsernavComponent implements OnInit {

  isLoggdIn=false;
  constructor(private router:Router) {
    if(localStorage.getItem('Loginuser')){
      this.isLoggdIn=true;
    }
   }
  

  ngOnInit(): void {
  }
  imgUrl='../../../assets/list/46.jpg'

  OnLogOut(){
    localStorage.removeItem('Loginuser');
    this.isLoggdIn=false
    this.router.navigate(['/'])
  }
}
