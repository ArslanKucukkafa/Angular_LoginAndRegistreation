import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { LoginuserService } from 'src/app/services/loginuser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User =new User;

  constructor(private userService:LoginuserService) { }

  ngOnInit(): void {
  }

  namePass():void{
    alert(this.user.username+this.user.password);
  }


  userLogin(){
this.userService.getUsers(this.user)
  }
}
