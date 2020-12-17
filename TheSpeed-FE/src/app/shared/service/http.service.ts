import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpeedObject } from '../model/speedObject';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _jsonURL = '/assets/mock.json';
    
  constructor(private http: HttpClient) { 
   /* this.getJSON().subscribe(data => {
      console.log(data);
     });*/
  }

  public static baseUrl = 'http://localhost:8080/';
  loadInitial() : Observable<SpeedObject[]> {
    return this.http.get<SpeedObject[]>(this._jsonURL);
  }

  loadMore(lastActivity: String, filter: String) : Observable<any>  {
    // when actually calling the service we can pass the lastActivity and query based
    // on the filter that the user has selected whether it should be events-only, posts-only, or both/either
    return this.http.get(this._jsonURL);
  }
}
