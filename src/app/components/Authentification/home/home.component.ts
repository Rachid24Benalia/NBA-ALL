import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from "../../../auth.service";
import { ApiService } from 'src/app/api.service';
import { Player } from 'src/app/player';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
  players:any[] = [];

  constructor(   
     public afAuth: AuthService,private apiService:ApiService

     

  ) { }


  ngOnInit() {
    // Check if user is signed in
    this.afAuth.check()
    //this.getPlayers(2,2021);

  }
  /*getPlayers(team:number,season:number){
    this.apiService.getPlayers(team,season).subscribe((response )=>{
      const playersResponse = response.body as PlayersResponse;
      this.players =  playersResponse.response;
      console.log(this.players)
    })
  }*/
  
}
interface PlayersResponse {
  response: any[]; // or replace any with the type of the actual response data
}