import { Component } from '@angular/core';
import { NasaApiService } from '../nasa-api.service';


@Component({
  selector: 'app-daily-image',
  templateUrl: './daily-image.component.html',
  styleUrls: ['./daily-image.component.css']
})
export class DailyImageComponent {
  date: string = '2023-02-20';
  apod: any = {};
  title = 'test-technique';
  constructor(private nasaApiService: NasaApiService) {}

  ngOnInit() {
    this.nasaApiService.getApod(this.date)
      .subscribe((data: any) => {
        this.apod = {
          title: data.title,
          explanation: data.explanation,
          url: data.url
        };
      });
  }
}
