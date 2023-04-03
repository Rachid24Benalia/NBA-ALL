import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ApiService } from 'src/app/api.service';
import { Player } from 'src/app/player';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(   
    public afAuth: AuthService,private apiService:ApiService

    

 ) { }
  ngOnInit() {
    // Check if user is signed in
    this.afAuth.check()
    //this.getPlayers(2,2021);

  }

}
