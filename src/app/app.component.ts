import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-website';

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

