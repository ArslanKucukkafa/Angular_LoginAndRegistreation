import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'; 
import { User } from '../models/user/user';




export interface AccessData {
  code: number;
  status: number;
  message: string;
}



@Injectable({
  providedIn: 'root'
})

export class RegisteruserService {
  private BaseURL ="http://127.0.0.1:8000/signup"


  constructor(private http:HttpClient) {}


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


   headers = new HttpHeaders({ 'accept': 'application/json','Content-Type': 'application/json'})  



  public saveUser(user:User){

    const body ={
      "parameter": {      
         "data":{
          "username":user.username,
          "email":user.email,
          "password":user.password
         }
    }
}

return this.http.post<AccessData>(this.BaseURL ,JSON.stringify(body),{headers:this.headers})

  }
}