import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../auth.service";
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players:any[] = [];
  constructor(   
    public afAuth: AuthService,private apiService:ApiService

    

 ) { }

 ngOnInit() {
  // Check if user is signed in
  this.afAuth.check()
  this.getPlayers('usa');

}
getPlayers(country:string){
  this.apiService.getPlayers(country).subscribe((response )=>{
    const playersResponse = response.body as TeamsResponse;
    this.players =  playersResponse.response;
    console.log(this.players)
  })
}

}
interface TeamsResponse {
  response: any[]; // or replace any with the type of the actual response data
}
