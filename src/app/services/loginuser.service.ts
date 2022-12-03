import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user/user';
import { HttpHeaders } from '@angular/common/http'; 
import {catchError} from 'rxjs/operators'; 
import { Token } from '@angular/compiler';


export class AccessData {
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

  accesData:AccessData= new AccessData;

  private BaseURL ="http://127.0.0.1:8000/login"
  //

  constructor(private httpClient:HttpClient) { }


   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
 

  public getUsers(user:User){
    const headerss = new HttpHeaders({ 'accept': 'application/json','Content-Type': 'application/json'})     
    const body ={
      "parameter": {      
         "data":{
          "username":user.username,
          "password":user.password
         }
    }
}
this.httpClient.post<AccessData>(this.BaseURL ,JSON.stringify(body),{headers:headerss}).subscribe(respons =>{this.accesData=respons})
if(this.accesData.code==null){console.log("Boş accesData"+this.accesData.message)}
else{console.log(this.accesData.result.access_token)
  localStorage.setItem("token",this.accesData.result.access_token)
  localStorage.setItem("httpStatus",this.accesData.status.toString())
}



alert(this.accesData.message+"Hello aRSLAN")
  return  

  }
}
