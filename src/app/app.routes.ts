import { Routes } from '@angular/router';
import { LoginComponent } from './user-authen/login/login.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './user-authen/sign-in/sign-in.component';
import { NoPageComponent } from './no-page/no-page.component'; 
import { UserComponent } from './user/user.component';
export const routes: Routes = [

  {
    path:'user-athen',
    loadChildren:()=>import('./user-authen/user-authen.module').then(mod=>mod.UserAuthenModule)
  }


  //routing 

    // {
    //     component:HeaderComponent,
    //     path:"header",
        
    //   },
    //   {
    //     component:LoginComponent,
    //     path:'login',
        
    //   },
    //   {
    //     component:SignInComponent,
    //     path:'signin',
        
    //   },
    //   {
    //     component:SignInComponent,
    //     path:'signin',
        
    //   },
    //   {
    //     component:UserComponent,
    //     path:'user/:id',
        
    //   },
    //   {
    //     component:NoPageComponent,
    //     path:'**',
        
    //   },
      

];
