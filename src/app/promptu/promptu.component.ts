import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promptu',
  templateUrl: './promptu.component.html',
  styleUrls: ['./promptu.component.scss']
})
export class PromptuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0)

  }

  openMobileClient() {
    window.open('https://speechtodrawhack.herokuapp.com','_blank');
  }

  openDesktopClient() {
    window.open('https://promptuhack.herokuapp.com', '_blank');
  }
}
