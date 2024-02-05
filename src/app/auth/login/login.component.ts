import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authservice:AuthServiceService){}
login(f:NgForm){
this.authservice.seConnecter(f.value["login"],f.value["mdp"]);
}
}
