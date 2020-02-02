import { Component, OnInit } from '@angular/core';
import { ScriptStoreService } from 'src/services/script-store.service';
import { LocationStrategy } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {fader} from './route-animations'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader
  ]
})


export class AppComponent implements OnInit {
  title = 'personal-website';

  constructor(private dynamicScriptLoader: ScriptStoreService, location: LocationStrategy) {
    location.onPopState(() => {
      window.location.reload()
      // this.loadScripts()
    });
    
  }

  ngOnInit() {

  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

  private loadScripts() {
    this.dynamicScriptLoader.load('appjs').then(data => {
      console.log(data)
      console.log("Scripts loaded succesfully")
    }).catch(error => console.log(error))
  }


}

