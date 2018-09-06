import {Injectable} from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { config } from '../app.config';


@Injectable()
export class HomeService {

  private getDataUrl = config.getEnvironmentVariable('endPoint') + 'api/v1/search_by_date?tags=story';

  constructor(private http: HttpClient) {
  }

  getData<T>(): Observable<T> {
    return this.http.get<T>(this.getDataUrl);
  }
}



