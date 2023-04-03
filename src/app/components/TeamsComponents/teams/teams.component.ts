import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../auth.service";
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams:any[] = [];

  constructor(   
     public afAuth: AuthService,private apiService:ApiService

     

  ) { }


  ngOnInit() {
    // Check if user is signed in
    this.afAuth.check()
    //this.getTeamsByConference('east');

  }
  getTeamsByConference(conference:string){
    this.apiService.getTeamsByConference(conference).subscribe((response )=>{
      const playersResponse = response.body as TeamsResponse;
      this.teams =  playersResponse.response;
      console.log(this.teams)
    })
  }
  
}
interface TeamsResponse {
  response: any[]; // or replace any with the type of the actual response data
}