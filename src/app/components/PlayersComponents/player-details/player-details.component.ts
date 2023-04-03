import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../auth.service";
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/player';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit  {
  
  player:any[] = [];
  stats:any[] = [];
  team:any[] = [];

  constructor(   
    public afAuth: AuthService,private apiService:ApiService,
    private route: ActivatedRoute

    

 ) { }
 ngOnInit() {
  // Check if user is signed in
  this.afAuth.check()
  const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  this.getPlayerById(id.toString());

 }
 getPlayerById(id:string){
  this.apiService.getPlayerById(id).subscribe((response )=>{
    const playersResponse = response.body as TeamResponse;
    this.player =  playersResponse.response;
    console.log(this.player)
  })
}
save(player:Player){
  this.apiService.savePlayer(player).then(res=>{
    alert("Saved")
  }).catch(Err=>{
    alert("Error")
  })
}
}
interface TeamResponse {
  response: any[]; // or replace any with the type of the actual response data
}