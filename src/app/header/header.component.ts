import { Component, Input, Output, output,EventEmitter } from '@angular/core';
import { UseService } from '../service/use.service';
import { CommonModule } from '@angular/common'; 
//import { EventEmitter } from 'node:stream';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


//   data:any;

// constructor(private user:UseService){
// this.data = user.users();

// }

//TAKING ARGUMENTS ARE DATA FROM PARENT TO CHILD

// @Input() item:{name:String,num:any,email:string,} = {name:'',num:0,email:''};

//PASSING VALUE OR DATA TO APP OR PARENT BY FUNCTION CALLING

// @Output() getDataEvent = new EventEmitter<any>();


//TESTING OR AUTOMATION TESTING  USING HEADER COMPONENT FROM APP COMPONENT


name = "jk";

getname(){
  return 'jk';
}

sum(a:any,b:any){
  return a+b;
}



}
