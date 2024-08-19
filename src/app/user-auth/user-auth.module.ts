import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from '../user-authen/sign-in/sign-in.component';


@NgModule({
  declarations: [
    //SignInComponent
  ],
  imports: [
    CommonModule,
    SignInComponent

  ],
  exports:[
    SignInComponent
  ]
})
export class UserAuthModule { }
