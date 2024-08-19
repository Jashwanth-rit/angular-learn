import { Component } from '@angular/core';
import { RouterOutlet,RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './user-authen/login/login.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { CommonModule } from '@angular/common';
import { FormsModule,NgForm,ReactiveFormsModule,FormControl,FormGroup,Validators} from '@angular/forms'; // Import FormsModule
import {NgbModule}  from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './user-authen/sign-in/sign-in.component';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UseService } from './service/use.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    UserAuthModule,
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule,
    HeaderComponent,
    HttpClientModule
    
    // BrowserAnimationsModule // Include FormsModule here
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Correct property name
})

//ROUTING -  BASIC ROUTING AND MULTIPLE ROUTING, DYNAMIC ROUTING




export class AppComponent {
  title = 'blog';



  //  interpolation usage and apply process
  
  //define anything like a variable here and use it in app html

  //header = "this is heading";

  // we can use function defined here in app html

  // getfun(){
  //   return "this is function returning value";
  // }

  //llive change in input  , printing what we give in input section
// content='';
//   getdata(name:string){
//      console.warn(name);
// this.content = name;
//   }
//counter increement or decreement , 
//we cant try to write a function which can return value
// because return value will be displayd there not universly

  //  count = 0;
  // counter(operation:string){
  //   if(operation === 'add'){
  //     this.count++;
  //   }
  //   else{
  //     this.count--;
  //   }

  // }
  
  //TRYING IF ,ELSE IF, FOR,FOREACH

  //show = true; 
  //color = 'black'; 
  // users = ['jk','pk','ak'];
//   users = [{name:'jk',num:9086,email:'jk@kar'},
//     {name:'pk',num:8922,email:'pk@kar'},
//     {name:'mk',num:144,email:'mk@kar'}];

// users = [{name:'jk',num:9086,email:'jk@kar',acc:['youtube','twitter','insta','bank']},
//       {name:'pk',num:8922,email:'pk@kar',acc:['youtube','twitter','insta','bank']},
//       {name:'mk',num:144,email:'mk@kar',acc:['youtube','twitter','insta','bank']}];

//dynamin binding of style

// color = 'red';
// updateColor(){
//   if(this.color == 'red'){
//     this.color = 'black';
//   }
//   else{
//     this.color  = 'red';
//   }
// }
  
// BASIC FORM BIULD AND ACCESSING VALUES

// getdata(data:NgForm){
//   console.warn(data);

// }  

//TODOLIST

// list:any[] = [];

// addlist(data:String){
// this.list.push({id:this.list.length,name:data});


// }
// removelist(id:number){
//   this.list = this.list.filter(item=>item.id !== id);
// }

//TWO WAY BINDING  -  THE PROCESS OF TAKING INPUT ANS PRINTING SIMULTANOOUSLY IS TWO WAY BINDING


//name:any;

//TYPESCKRIPT - process of defining data to prevent error in page

// data:number = 20;
// name:String = 'jk';
//item:{name:String,ph:number} = {name:'jk',ph:4533};
//users:String[] = [];
//users:any[] = [];


//TEMPLATE REFRENCE VARIABLE

// getdata(data:string){
//   console.warn(data);
// }

//PIPES IN ANGULAR

// name = 'jayakeerthi';
// time = Date();
// num = 2002010.21321;
// user = {name:'jk'};

//REACTIVE FORM 



// loginForm = new FormGroup({
//   user: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
//   email: new FormControl('',[Validators.required,Validators.email]),
//   password: new FormControl('',[Validators.required,Validators.minLength(5)])

// });
// loginUser(){
//   console.warn(this.loginForm);
// }
// get user(){
//   return this.loginForm.get('user')
// }
// get email(){
//   return this.loginForm.get('user')
// }
// get password(){
//   return this.loginForm.get('user')
// }

//VALIDATION IN REACTIVE FORM 

//DIRECTIVE USAGE 

//name = 'jk';


//SERVICE USAGE  -  USING DATA BY KEEPING DATA IN ONE FILE INSTEAD OF SHAREING IT IN ALL FILES

// data:any;

// constructor(private user:UseService){
// this.data = user.users();

// }

//PASSING DATA FROM  PARENT TO CHILD MEANS APP TO HEADER

// users = [
//   {name:'jk',num:1234,email:'jk@gmail.com'},
//   {name:'pk',num:1234,email:'pk@gmail.com'},
//   {name:'ak',num:1234,email:'ak@gmail.com'}
// ]

// user:any;
// getdata(data:any){
//   console.warn(data);
//   this.user = data;
// }


//API CALLING AND GETTING DATA

// users:any;

// constructor(private userData:UseService){
// this.userData.usersget().subscribe((data)=>{
//   this.users=data
// });
// }

// putuserdata(formdata:any){
//   this.userData.usersput(formdata).subscribe((result)=>{
//     console.warn(formdata);
//   })
// }

// TESTING OR AUTOMATION TESTING  USING HEADER COMPONENT


  }

