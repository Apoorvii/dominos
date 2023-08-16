import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card' 
import { RouterModule } from '@angular/router';
import { MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component'
import { MatSelectModule } from '@angular/material/select'

const angularMaterial=[
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatSnackBarModule,
  MatDialogModule,
  MatSelectModule
]
@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    DialogComponent,
   
  ],
  imports: [
    CommonModule,
    angularMaterial,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    RegisterComponent,
    LoginComponent,
    angularMaterial
  ]
})
export class UserModule { }
