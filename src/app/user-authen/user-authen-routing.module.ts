import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
console.warn('user-athen page is loaded once');
const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signin',
    component:SignInComponent
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAuthenRoutingModule { }
