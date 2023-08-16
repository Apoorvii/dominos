import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './admin/add/add.component';
import { DeleteComponent } from './admin/delete/delete.component';
import { EditComponent } from './admin/edit/edit.component';
import { ListComponent } from './admin/list/list.component';
import { AddPizzaComponent } from './customer/add-pizza/add-pizza.component';
import { OrderComponent } from './customer/order/order.component';
import { UserOffersComponent } from './customer/user-offers/user-offers.component';
import { UsernavComponent } from './customer/usernav/usernav.component';
import { ViewPizzaComponent } from './customer/view-pizza/view-pizza.component';
import { MainComponent } from './main/main/main.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';


const routes: Routes = [
  {path:'',component:MainComponent},

  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},

  {path:'userNav',component:UsernavComponent},
  {path:'viewPizza',component:ViewPizzaComponent},
  {path:'sploffers',component:UserOffersComponent},
  {path:'addPizza',component:OrderComponent},



  {path:'adminList',component:ListComponent},
  {path:'adminAdd',component:AddComponent},
  {path:'adminEdit',component:EditComponent},
  {path:'adminEdit',component:DeleteComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
