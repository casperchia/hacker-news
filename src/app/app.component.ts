import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router: Router) {
  }

  ngOnInit() {
    // Scroll to top on navigation
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => window.scroll(0, 0));
  }
}
