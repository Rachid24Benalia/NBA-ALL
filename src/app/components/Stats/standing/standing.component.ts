import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../auth.service";
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.css']
})
export class StandingComponent {

  standingEast:any[] = [];
  standingWest:any[] = [];

  constructor(   
    public afAuth: AuthService,private apiService:ApiService

    

 ) { }


 ngOnInit() {
   // Check if user is signed in
   this.afAuth.check()
   this.getTeamsStanding('east');
   this.getTeamsStanding('west');
   
 }
 getTeamsStanding(conference:string){
  this.apiService.getTeamsStanding(conference).subscribe((response )=>{
    const standingResponse = response.body as TeamsStandingResponse;
    if(conference == 'east'){
      this.standingEast =  standingResponse.response;
    this.standingEast.sort((a, b) => a.conference.rank - b.conference.rank);
    console.log(this.standingEast)
    } else {
      this.standingWest =  standingResponse.response;
      this.standingWest.sort((a, b) => a.conference.rank - b.conference.rank);
      console.log(this.standingWest)
    }
    
  })
}
}
interface TeamsStandingResponse {
  response: any[]; // or replace any with the type of the actual response data
}
