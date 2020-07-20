import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dateTimeObj;
  date: string;
  year: string;
  month: string;


  constructor(private service: ApiService) {}

  ngOnInit() {
    // assign API response to dateTimeObj on loading of application
    this.service.getDateTimeAPI().subscribe((response) => {
      this.dateTimeObj  = response.json();
    });
  }


  getDateTime() {
    // Use this function to parse the date returned by the API upon button click
    this.date = this.dateTimeObj.date.split("-")[1];
    this.month = this.dateTimeObj.date.split("-")[0];  
    this.year = this.dateTimeObj.date.split("-")[2];
  }
}
