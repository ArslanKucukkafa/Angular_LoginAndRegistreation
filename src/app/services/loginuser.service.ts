import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user/user';
import { HttpHeaders } from '@angular/common/http'; 
import {catchError} from 'rxjs/operators'; 


export interface AccessData {
  code: number;
  status: number;
  message: string;
  result: {
    access_token: string;
    token_type:string;
  }
}


@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private BaseURL ="http://127.0.0.1:8000/login"
  //

  constructor(private httpClient:HttpClient) { }


   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
 

  public getUsers(user:User){


    const aa={"username":user.username,
    "password": user.password}



    const headerss = new HttpHeaders({ 'accept': 'application/json','Content-Type': 'application/json'})  
    const data=JSON.stringify(aa);
    console.log(data)
    alert(data+" ")
    const body ={
      "parameter": {      
         "data":{
          "username":user.username,
          "password":user.password
         }
    }
}
    console.log(body)
    console.log(headerss)
    console.log(this.BaseURL)

    return this.httpClient.post<AccessData>(this.BaseURL ,JSON.stringify(body),{headers:headerss})
  


    // loginUser(user:User):Observable<object>{
    //    console.log(user)
    //   return this.httpClient.post("${this.BaseURL}",user);
    // }
}}
