import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-offers',
  templateUrl: './user-offers.component.html',
  styleUrls: ['./user-offers.component.scss']
})
export class UserOffersComponent implements OnInit {

  imgUrl='../../../assets/list/46.jpg'

  isLoggdIn=true;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  OnLogOut(){
    localStorage.removeItem('Loginuser');
    this.isLoggdIn=false
    this.router.navigate(['/'])
  }
}
