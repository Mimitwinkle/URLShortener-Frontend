import { Component } from '@angular/core';
import { UrlShortenerService } from 'src/app/shared/url-shortener.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  url : string = "";
  originalUrl : string = "";
  shortUrl : string = "";
  isUrlGenerated : boolean = false;
  isErrorGenerated : boolean = false;
  constructor(private urlShortenerService : UrlShortenerService) {
  }

  ngOnInit() : void {
    this.isUrlGenerated = false;
    this.isErrorGenerated = false;
  }

  generateShortUrl() {
    this.urlShortenerService.getShortUrl(this.url).subscribe(res => {
      if(res==null) {
        this.isUrlGenerated = false;
        this.isErrorGenerated = true;
      } else {
        this.isErrorGenerated = false;
        this.shortUrl = res.shortUrl;
        this.originalUrl = res.originalUrl;
        this.isUrlGenerated = true;
      }
    }, err => {
      console.log(err);
      this.isErrorGenerated = true;
    });
  }

}
