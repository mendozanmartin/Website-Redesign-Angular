import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdrupComponent } from './ordrup/ordrup.component';
import { HomeComponent } from './home/home.component';
import { ChallengeforchangeComponent } from './challengeforchange/challengeforchange.component';
import { RefugeevrexperienceComponent } from './refugeevrexperience/refugeevrexperience.component';
import { RadiothonboothComponent } from './radiothonbooth/radiothonbooth.component';
import { PromptuComponent } from './promptu/promptu.component';
import { JackstonesComponent } from './jackstones/jackstones.component';
import { ArduinovacuumComponent } from './arduinovacuum/arduinovacuum.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
  path: 'ordrup',
  component: OrdrupComponent
  },
  {
    path: 'challengeforchange',
    component: ChallengeforchangeComponent
  },
  {
    path: 'refugeevrexperience',
    component: RefugeevrexperienceComponent
  },
  {
    path: 'radiothonbooth',
    component: RadiothonboothComponent
  },
  {
    path: 'promptu',
    component: PromptuComponent
  },
  {
    path: 'jackstones',
    component: JackstonesComponent
  },
  {
    path: 'arduinovacuum',
    component: ArduinovacuumComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
