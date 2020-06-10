import { Component } from '@angular/core';
import { ClimateService } from './climate.service';
import { Weather } from './weather';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'local-weather-app';
  result: Weather;

constructor(private climateservice: ClimateService){}

doSearch(searchValue){
  const userInput = searchValue.split(',').map(s=> s.trim())
  this.climateservice.getWeather(userInput[0],userInput.length > 1 ? userInput[1] : undefined).subscribe(data=>this.result=data);
  console.log(this.result);
}

}
