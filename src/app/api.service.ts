import { Injectable } from '@angular/core';
import { Player } from './player';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Team } from './team';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private userRef: AngularFirestoreCollection<Player>;

  constructor(private http: HttpClient,private authService:AuthService,private afs: AngularFirestore) {
    this.userRef = this.afs.collection<Player>('players');
   }
  
  getPlayers(country:string) {
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', 'cfb4908dafmshe88173386327ebbp1f749bjsn039210f3bc10').set('X-RapidAPI-Host', 'api-nba-v1.p.rapidapi.com');

    return this.http.get('https://api-nba-v1.p.rapidapi.com/players', {
      headers: headers,
      params: {
        country
      },
      observe: 'response'
    });
  }
  getTeamsByConference(conference:string) {
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', 'cfb4908dafmshe88173386327ebbp1f749bjsn039210f3bc10').set('X-RapidAPI-Host', 'api-nba-v1.p.rapidapi.com');

    return this.http.get('https://api-nba-v1.p.rapidapi.com/teams', {
      headers: headers,
      params: {
        conference
      },
      observe: 'response'
    });
  }
  getTeamsById(id:string) {
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', 'cfb4908dafmshe88173386327ebbp1f749bjsn039210f3bc10').set('X-RapidAPI-Host', 'api-nba-v1.p.rapidapi.com');

    return this.http.get('https://api-nba-v1.p.rapidapi.com/teams', {
      headers: headers,
      params: {
        id
      },
      observe: 'response'
    });
  }
  getTeamStatistics(id:string) {
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', 'cfb4908dafmshe88173386327ebbp1f749bjsn039210f3bc10').set('X-RapidAPI-Host', 'api-nba-v1.p.rapidapi.com');

    return this.http.get('https://api-nba-v1.p.rapidapi.com/teams/statistics', {
      headers: headers,
      params: {
        id, season:'2022'
      },
      observe: 'response'
    });
  }
  getTeamsStanding(conference:string) {
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', 'cfb4908dafmshe88173386327ebbp1f749bjsn039210f3bc10').set('X-RapidAPI-Host', 'api-nba-v1.p.rapidapi.com');

    return this.http.get('https://api-nba-v1.p.rapidapi.com/standings', {
      headers: headers,
      params: {
        league: 'standard', season: '2022', conference
        
      },
      observe: 'response'
    });
  }
  getPlayersByTeam(team:string) {
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', 'cfb4908dafmshe88173386327ebbp1f749bjsn039210f3bc10').set('X-RapidAPI-Host', 'api-nba-v1.p.rapidapi.com');

    return this.http.get('https://api-nba-v1.p.rapidapi.com/players', {
      headers: headers,
      params: {
        team, season: '2022'
        
      },
      observe: 'response'
    });
  }
  getPlayerById(id:string) {
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', 'cfb4908dafmshe88173386327ebbp1f749bjsn039210f3bc10').set('X-RapidAPI-Host', 'api-nba-v1.p.rapidapi.com');

    return this.http.get('https://api-nba-v1.p.rapidapi.com/players', {
      headers: headers,
      params: {
        id
      },
      observe: 'response'
    });
  }


  savePlayer(player:Player){
    const userId = this.authService.getUserId();
    const userDocRef = this.userRef.doc(userId);
    const savedReposCollectionRef = userDocRef.collection<Player>('savedPlayers');

    return savedReposCollectionRef.doc(player.id.toString()).set(player);
  }
  saveTeam(team:Team){
    const userId = this.authService.getUserId();
    const userDocRef = this.userRef.doc(userId);
    const savedReposCollectionRef = userDocRef.collection<Team>('savedTeams');

    return savedReposCollectionRef.doc(team.id.toString()).set(team);
  }

  async removePlayer(savedPlayedId: number) {
    const userId = this.authService.getUserId();
    const userDocRef = this.userRef.doc(userId);
    const savedRepoRef = userDocRef.collection<Player>('savedPlayers').doc(savedPlayedId.toString());
    return savedRepoRef.delete();
  }
  async removeTeam(savedTeamId: number) {
    const userId = this.authService.getUserId();
    const userDocRef = this.userRef.doc(userId);
    const savedRepoRef = userDocRef.collection<Player>('savedTeams').doc(savedTeamId.toString());
    return savedRepoRef.delete();
  }
  
  async getAllSavedPlayersByUser(): Promise<Player[]> {
    const userId = this.authService.getUserId();
    const userDocRef = this.userRef.doc(userId);
    const savedReposCollectionRef = userDocRef.collection<Player>('savedPlayers');
  
    const querySnapshot = await savedReposCollectionRef.get().toPromise();
    const savedRepos: Player[] = [];
    querySnapshot!!.docs.forEach(doc => {
      const savedRepo = doc.data() as Player;
      savedRepos.push(savedRepo);
    });
    console.log(savedRepos)
    return savedRepos;
  }
  async getAllSavedTeamsByUser(): Promise<Team[]> {
    const userId = this.authService.getUserId();
    const userDocRef = this.userRef.doc(userId);
    const savedReposCollectionRef = userDocRef.collection<Team>('savedTeams');
  
    const querySnapshot = await savedReposCollectionRef.get().toPromise();
    const savedRepos: Team[] = [];
    querySnapshot!!.docs.forEach(doc => {
      const savedRepo = doc.data() as Team;
      savedRepos.push(savedRepo);
    });
    console.log(savedRepos)
    return savedRepos;
  }
  
}
