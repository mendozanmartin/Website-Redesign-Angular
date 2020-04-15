import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { ScriptStoreService } from "src/services/script-store.service";
import { Router, NavigationEnd, Event, NavigationStart } from "@angular/router";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(
    private dynamicScriptLoader: ScriptStoreService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.loadScripts();
      }
    });
  }

  private loadScripts() {
    this.dynamicScriptLoader
      .load("appjs")
      .then((data) => {
        console.log(data);
        console.log("Scripts loaded succesfully");
      })
      .catch((error) => console.log(error));
  }

  downloadResume() {
    window.open("../assets/Resume.pdf", "_blank");
  }

  openWebsite(website: string) {
    switch (website) {
      case "linkedIn":
        window.open(
          "https://www.linkedin.com/in/martin-mendoza/",
          "_blank" // <- This is what makes it open in a new window.
        );
        break;
      case "github":
        window.open("https://github.com/mendozanmartin", "_blank");
        break;
      case "email":
        window.open("mailto:mendozan@mcmaster.ca", "_blank");
        break;
      case "vimeo":
        window.open("https://vimeo.com/user100529261", "_blank");
        break;
      case "devpost":
        window.open("https://devpost.com/mendozanmartin", "_blank");
        break;
    }
  }

  onSubmit(f: NgForm) {
    const url =
      "https://us-central1-personal-website-ccd53.cloudfunctions.net/sendMail";

    const body = {
      name: f.value.name,
      email: f.value.email,
      subject: f.value.subject,
      message: f.value.message,
    };
    const header = {
      "Content-Type": "application/json",
    };

    this.http.post(url, body, { headers: header }).subscribe((data: any) => {
      console.log(data);
      $("#modal").modal();
      f.reset();
    }); //todo: please configure CORS policy cuz something wrong
  }
}
