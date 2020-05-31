import { Observable } from 'rxjs'
import { Weather} from './weather'


export interface Igeneral {
  getWeather(search: string|number, country?: string):
  Observable<Weather>
}
