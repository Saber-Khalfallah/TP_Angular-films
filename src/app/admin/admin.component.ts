import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth/auth-service.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private authService: AuthServiceService, private router: Router) {}
logout(){
  this.authService.logout()
  this.router.navigate(['/login']);
}

}
