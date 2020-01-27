import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdrupComponent } from './ordrup/ordrup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PromptuComponent } from './promptu/promptu.component';
import { ChallengeforchangeComponent } from './challengeforchange/challengeforchange.component';
import { RefugeevrexperienceComponent } from './refugeevrexperience/refugeevrexperience.component';
import { JackstonesComponent } from './jackstones/jackstones.component';
import { ArduinovacuumComponent } from './arduinovacuum/arduinovacuum.component';
import { RadiothonboothComponent } from './radiothonbooth/radiothonbooth.component';
import { HungerfreesnapComponent } from './hungerfreesnap/hungerfreesnap.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdrupComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PromptuComponent,
    ChallengeforchangeComponent,
    RefugeevrexperienceComponent,
    JackstonesComponent,
    ArduinovacuumComponent,
    RadiothonboothComponent,
    HungerfreesnapComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
