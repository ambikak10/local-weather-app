import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../weather';


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

 @Input() current: Weather;
  constructor() { }

  ngOnInit(): void {
  //  this.weatherService.getWeather('Redmond','US').subscribe(data=> this.current=data)
    }
  }


