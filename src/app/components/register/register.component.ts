import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User= new User;
  
  ngOnInit(): void {
  }

}
