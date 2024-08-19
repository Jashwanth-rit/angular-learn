import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UseService {

  constructor(private http:HttpClient) { 


    
  }

  //get operation using API CALLING USING URL

  // usersget(){
  //   return this.http.get(url);
  // }

  //POST OPERATION USING API CALLING USING URL

  // usersput(data:any){
  //   return this.http.post(url,data);
  // }


  //creating data and using it in other files is called service 

  // users(){
  //   return [
  //     {name:'anil',age:10,email:'jk@karunadu'},
  //     {name:'jk',age:20,email:'pk@karunadu'},
  //   ]

  // }
}
