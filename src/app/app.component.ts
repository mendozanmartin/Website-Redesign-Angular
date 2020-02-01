import { Component, OnInit } from '@angular/core';
import { ScriptStoreService } from 'src/services/script-store.service';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'personal-website';

  constructor(private dynamicScriptLoader: ScriptStoreService, location: LocationStrategy) {
    location.onPopState(() => {
      this.loadScripts()
    });
    
  }

  ngOnInit() {

  }

  private loadScripts() {
    this.dynamicScriptLoader.load('appjs').then(data => {
      console.log(data)
      console.log("Scripts loaded succesfully")
    }).catch(error => console.log(error))
  }


}

