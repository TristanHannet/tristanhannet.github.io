import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { NasaApiService } from '../nasa-api.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
  constructor(private nasaApiService: NasaApiService) { 
  }
  title = 'test-technique';
  startDate =  '2023-02-01';
  endDate = '2023-02-07';
  displayedColumns: string[] = ['date', 'name', 'distance', 'velocity']
  neoFeed: any[] = [];
  Charging = true;
  

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  ngOnInit() {
    
    this.refreshNasa();
  }

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    if(dateRangeEnd.value.length !== 0){
      this.startDate = this.formatDate(new Date(dateRangeStart.value));
      this.endDate = this.formatDate(new Date(dateRangeEnd.value));
      console.log(this.startDate);
      console.log(this.endDate);
      this.refreshNasa();
      
    }
    else{
      console.log("null");
    }
    
  };

  formatDate(date: Date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  refreshNasa(){
    
    this.Charging = true;
    this.nasaApiService.getNeoFeed(this.startDate, this.endDate)
      .subscribe((data: any) => {
        const neoList = data.near_earth_objects;
        this.neoFeed = Object.keys(neoList).map(key => {
          const neo = neoList[key][0];
          return {
            date: neo.close_approach_data[0].close_approach_date,
            name: neo.name,
            distance: neo.close_approach_data[0].miss_distance.kilometers,
            velocity: neo.close_approach_data[0].relative_velocity.kilometers_per_hour
          };
        });
      });

      
  }

}
