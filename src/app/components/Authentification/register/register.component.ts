import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from "../../../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  
  ngOnInit(): void {
  }
  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}