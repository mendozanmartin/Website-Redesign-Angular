import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OrdrupComponent } from "./ordrup/ordrup.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { PromptuComponent } from "./promptu/promptu.component";
import { ChallengeforchangeComponent } from "./challengeforchange/challengeforchange.component";
import { RefugeevrexperienceComponent } from "./refugeevrexperience/refugeevrexperience.component";
import { JackstonesComponent } from "./jackstones/jackstones.component";
import { ArduinovacuumComponent } from "./arduinovacuum/arduinovacuum.component";
import { RadiothonboothComponent } from "./radiothonbooth/radiothonbooth.component";
import { EcosnapComponent } from "./ecosnap/ecosnap.component";
import { MedexpressComponent } from "./medexpress/medexpress.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxPageScrollCoreModule } from "ngx-page-scroll-core";
import { NgxPageScrollModule } from "ngx-page-scroll";
import { NgxTypedJsModule } from "ngx-typed-js";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

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
    HeaderComponent,
    EcosnapComponent,
    MedexpressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    NgxTypedJsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
