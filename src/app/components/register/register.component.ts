import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { RegisteruserService } from 'src/app/services/registeruser.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User= new User;
  
  constructor(private userService:RegisteruserService) { }



userRegister(){
  console.log(this.user.password,this.user.username,this.user.email)
  this.userService.saveUser(this.user).subscribe(data =>{console.log(data)})
}

  ngOnInit(): void {
  }

}
