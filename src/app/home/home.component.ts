import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  
  downloadResume() {
    window.open('../assets/assets/Resume.pdf', '_blank')
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
