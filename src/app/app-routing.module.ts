import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/Authentification/login/login.component';
import { RegisterComponent } from './components/Authentification/register/register.component';
import { HomeComponent } from './components/Authentification/home/home.component';
import { TeamsComponent } from './components/TeamsComponents/teams/teams.component';
import { TeamDetailsComponent } from './components/TeamsComponents/team-details/team-details.component';
import { PlayerComponent } from './components/PlayersComponents/player/player.component';
import { PlayerDetailsComponent } from './components/PlayersComponents/player-details/player-details.component';
import { FavouritePLayersComponent } from './components/Favs/favourite-players/favourite-players.component';
import { FavouriteTeamsComponent } from './components/Favs/favourite-teams/favourite-teams.component';
const routes: Routes = [
  {
    path: '',
    component : HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'teams',
    component: TeamsComponent,
  },
  {
    path: 'teams/:id',
    component: TeamDetailsComponent,
  },
  {
    path: 'players',
    component: PlayerComponent,
  },
  {
    path: 'players/:id',
    component: PlayerDetailsComponent,
  },
  {
    path: 'favplayers',
    component: FavouritePLayersComponent,
  },
  {
    path: 'favteams',
    component: FavouriteTeamsComponent,
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
