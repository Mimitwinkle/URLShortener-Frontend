import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  url : string = "";

  constructor() {
  }

  ngOnInit() : void {
  }

  generateShortUrl() {
    console.log(this.url);
  }

}
