import { Component } from '@angular/core';
import { StoryDataService } from './services/story-data.service';
import { HttpClient } from '@angular/common/http';
import { Article } from '../type/index'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  
  title = 'EnginSystems';
  stories: Array<Article>;

  constructor(private storyData: StoryDataService, private http: HttpClient) {
    this.stories = [];

    this.storyData.story().subscribe((data: Number[]) => {
      const storyIds = data.slice(0, 25);

      if (storyIds != null && storyIds.length >= 0) {
        for (const id in storyIds) {
          this.http
            .get<Article>(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .pipe((data) => data)
            .subscribe((data: Article) => {
              this.stories.push(data)
            });
        }
      }
    });
    
  }
}
