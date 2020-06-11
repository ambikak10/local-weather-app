import { Injectable } from '@angular/core';
import { Weather } from './weather';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Igeneral } from './igeneral';

interface IweatherData{
  weather: [{ description: string, icon: string}]
  main : {temp: number, humidity: number}
  dt: number
  sys: {country: string}
  name: string
}

@Injectable({
  providedIn: 'root'
})


export class ClimateService implements Igeneral {

  constructor(private http: HttpClient) { }
  
getWeather(search: string|number, country: string) {
  let uriParams ='';
  if(typeof search === 'string'){
     uriParams= `q=${search}`
   }
    else {
      uriParams = `zip=${search}`
  }
  if(country){
    uriParams = `${uriParams},${country}`
  }
 return this.http.get<IweatherData>(`${environment.baseUrl}api.openweathermap.org/data/2.5/weather?${uriParams}&appid=${environment.appID}`).pipe(map(data => this.transformData(data)))
}

transformData(data: IweatherData): Weather{
 return    {
  description: data.weather[0].description,
  temperature: this.transformToCelsius(data.main.temp),
  humidity: data.main.humidity,
  date: new Date(data.dt*1000),
  country: data.sys.country,
  city: data.name,
  image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
     }

  }
 transformToCelsius(temperture: number) {
      return temperture-273.15
      
   }
  }


