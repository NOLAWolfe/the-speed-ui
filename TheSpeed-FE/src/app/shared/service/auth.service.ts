import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router, private httpService: HttpService) { }

  getUserByUsername(username: string): Observable<any> {
    return this.httpClient.get(HttpService.baseUrl + `user/${username}`);
  }


}
