import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { max } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StoryDataService {

  newsUrl: string;

  constructor(private http:HttpClient) {
    this.newsUrl = "https://hacker-news.firebaseio.com/v0/topstories.json";
  }

  story(){
    return this.http.get<Number[]>(this.newsUrl);
  }
}
