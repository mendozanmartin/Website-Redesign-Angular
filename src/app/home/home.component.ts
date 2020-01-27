import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ScriptStoreService } from 'src/services/script-store.service';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {



  constructor(private dynamicScriptLoader: ScriptStoreService, private router: Router) { }

  ngOnInit() {
    // this.router.events.subscribe(
    //   (event: Event) => {
    //     if (event instanceof NavigationEnd) {
    //       this.loadScripts();
    //       console.log("Script loaded")
    //     }
    //   }
    // )
  }


  private loadScripts() {
    this.dynamicScriptLoader.load('vendorjs', 'appjs').then(data => {
      console.log(data)
      console.log("Scripts loaded succesfully")
    }).catch(error => console.log(error))
  }

  
  downloadResume() {
    window.open('../assets/Resume.pdf', '_blank')
  }

  openWebsite(website: string) {
    switch (website) {
      case "linkedIn":
          window.open(
              'https://www.linkedin.com/in/martin-mendoza/',
              '_blank' // <- This is what makes it open in a new window.
          );
          break;
      case "github":
          window.open(
              'https://github.com/mendozanmartin',
              '_blank'
          );
          break;
      case "email":
          window.open(
              'mailto:mendozan@mcmaster.ca',
              '_blank'
          );
          break;
      case "vimeo":
          window.open(
              'https://vimeo.com/user100529261',
              '_blank'
          );
  }
  }

}
