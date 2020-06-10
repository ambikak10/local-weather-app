import { Igeneral } from './igeneral';
import { Weather } from './weather';
import { Observable, of} from 'rxjs';


export class ClimateFakeService implements Igeneral{
private fakeWeather: Weather ={
  city: 'Seattle',
  country: 'US',
  date: new Date(),
  image: '',
  temperature: 61,
  description: 'light rain',
  humidity: 70
}

public getWeather(search: string|number, country?: string): Observable<Weather>{
  return of (this.fakeWeather);
  }
}

