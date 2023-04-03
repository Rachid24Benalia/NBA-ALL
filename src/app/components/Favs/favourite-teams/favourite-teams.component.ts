import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../auth.service";
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/player';
import { Team } from 'src/app/team';


@Component({
  selector: 'app-favourite-teams',
  templateUrl: './favourite-teams.component.html',
  styleUrls: ['./favourite-teams.component.css']
})


export class FavouriteTeamsComponent implements OnInit {


  players:Player[] =[]

  savedTeams:Team[]=[]

  constructor(   
     public afAuth: AuthService,private apiService:ApiService

  ) { }


  ngOnInit() {
    // Check if user is signed in
    this.afAuth.check()
   this.apiService.getAllSavedTeamsByUser().then(resp=>{
    this.savedTeams=resp
   })
   console.log(this.savedTeams)
  }


  remove(team:Team){
    this.savedTeams = this.savedTeams.filter(e=>e.id!= team.id)
    this.apiService.removeTeam(+team.id).then(res=>{
      alert("Removed")
    }).catch(Err=>{
      alert("Error")
    })
  }

}
interface PlayersResponse {
  response: Player[]; // or replace any with the type of the actual response data
}
