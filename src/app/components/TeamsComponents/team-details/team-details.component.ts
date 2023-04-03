import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../auth.service";
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/team';

import { Player } from 'src/app/player';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent  implements OnInit {


  team:any[] = [];
  stats:any[] = [];
  players:Player[] = [];

  constructor(   
    public afAuth: AuthService,private apiService:ApiService,
    private route: ActivatedRoute

    

 ) { }
 ngOnInit() {
  // Check if user is signed in
  this.afAuth.check()
  const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  this.getTeamsById(id.toString());
  this.getTeamStatistics(id.toString());
  this.getPlayersByTeam(id.toString());
  
  
}
getTeamsById(id:string){
  this.apiService.getTeamsById(id).subscribe((response )=>{
    const playersResponse = response.body as TeamResponse;
    this.team =  playersResponse.response;
    console.log(this.team)
  })
}
getTeamStatistics(id:string){
  this.apiService.getTeamStatistics(id).subscribe((response )=>{
    const playersResponse = response.body as TeamResponse;
    this.stats =  playersResponse.response;
    console.log(this.stats)
  })
}

getPlayersByTeam(id:string){
  this.apiService.getPlayersByTeam(id).subscribe((response )=>{
    const playersResponse = response.body as TeamResponse;
    this.players =  playersResponse.response;
    console.log(this.players)
  })
}
save(player:Player){
  this.apiService.savePlayer(player).then(res=>{
    alert("Saved")
  }).catch(Err=>{
    alert("Error")
  })
}
remove(player:Player){
  this.apiService.removePlayer(player.id).then(res=>{
    alert("Saved")
  }).catch(Err=>{
    alert("Error")
  })
}
saveTeam(team:Team){
  console.log(team)
  this.apiService.saveTeam(team).then(res=>{
    alert("Saved")
  }).catch(Err=>{
    alert("Error")
  })
}


}
interface TeamResponse {
  response: Player[]; // or replace any with the type of the actual response data
}     