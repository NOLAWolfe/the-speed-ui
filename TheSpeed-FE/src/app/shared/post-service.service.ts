import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private myhttp: HttpClient) { }
  
  //mock service for now - 
  retrieveLatestPosts(num: number, userId: number) :any {

  }
   
}
