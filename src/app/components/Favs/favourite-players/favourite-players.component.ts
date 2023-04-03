import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../auth.service";
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/player';

@Component({
  selector: 'app-favourite-players',
  templateUrl: './favourite-players.component.html',
  styleUrls: ['./favourite-players.component.css']
})
export class FavouritePLayersComponent implements OnInit {


  players:Player[] =[]

  savedPlayers:Player[]=[]

  constructor(   
     public afAuth: AuthService,private apiService:ApiService

  ) { }


  ngOnInit() {
    // Check if user is signed in
    this.afAuth.check()
   this.apiService.getAllSavedPlayersByUser().then(resp=>{
    this.savedPlayers=resp
   })
  }

  save(player:Player){
    console.log(player)
    this.apiService.savePlayer(player).then(res=>{
      alert("Saved")
    }).catch(Err=>{
      alert("Error")
    })
  }
  remove(player:Player){
    this.savedPlayers = this.savedPlayers.filter(e=>e.id!=player.id)
    this.apiService.removePlayer(player.id).then(res=>{
      alert("Removed")
    }).catch(Err=>{
      alert("Error")
    })
  }

}
interface PlayersResponse {
  response: Player[]; // or replace any with the type of the actual response data
}