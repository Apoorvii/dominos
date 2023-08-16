import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './main/nav/nav.component';
import { FamousComponent } from './main/famous/famous.component';
import { OffersComponent } from './main/offers/offers.component';
import { MainComponent } from './main/main/main.component';
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatIconModule} from '@angular/material/icon'
import { UserModule } from './user/user.module';
import { UsernavComponent } from './customer/usernav/usernav.component';
import { UserOffersComponent } from './customer/user-offers/user-offers.component';
import { AddComponent } from './admin/add/add.component';
import { EditComponent } from './admin/edit/edit.component';
import { DeleteComponent } from './admin/delete/delete.component';
import { ListComponent } from './admin/list/list.component';
import { ViewPizzaComponent } from './customer/view-pizza/view-pizza.component';
import { AddPizzaComponent } from './customer/add-pizza/add-pizza.component';
import { DialogComponent } from './user/dialog/dialog.component';
import { ToastrModule} from 'ngx-toastr';
import { OrderComponent } from './customer/order/order.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FamousComponent,
    OffersComponent,
    MainComponent,
    UsernavComponent,
    UserOffersComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    ListComponent,
    ViewPizzaComponent,
    AddPizzaComponent,
    OrderComponent,
    
    
  ],
  entryComponents:[DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    UserModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
