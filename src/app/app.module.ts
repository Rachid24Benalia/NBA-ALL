import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './components/Authentification/login/login.component';
import { RegisterComponent } from './components/Authentification/register/register.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms'; // import the FormsModule
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/Authentification/home/home.component';
import { PlayerComponent } from './components/PlayersComponents/player/player.component';
import { PlayerDetailsComponent } from './components/PlayersComponents/player-details/player-details.component';
import { TeamsComponent } from './components/TeamsComponents/teams/teams.component';
import { TeamDetailsComponent } from './components/TeamsComponents/team-details/team-details.component';
import { TeamsPerConferenceComponent } from './components/TeamsComponents/teams-per-conference/teams-per-conference.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { PlayersStatsComponent } from './components/Stats/players-stats/players-stats.component';
import { StandingComponent } from './components/Stats/standing/standing.component';
import { OrderByPipe } from './Pipes/orderBy.pipe';
import { FavouritePLayersComponent } from './components/Favs/favourite-players/favourite-players.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { FavouriteTeamsComponent } from './components/Favs/favourite-teams/favourite-teams.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerComponent,
    PlayerDetailsComponent,
    TeamsComponent,
    TeamDetailsComponent,
    TeamsPerConferenceComponent,
    PlayersStatsComponent,
    StandingComponent,
    OrderByPipe,
    FavouritePLayersComponent,
    NavbarComponent,
    FavouriteTeamsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTabsModule,
    MatCardModule
    
    
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    AuthService,
    AngularFireAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
