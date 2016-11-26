import {Component, OnInit} from '@angular/core';
import {NewsService} from "../news.service";

@Component({
  selector: 'news-list',
  templateUrl: 'news-list.component.html',
  styleUrls: ['news-list.component.css']
})
export class NewsListComponent implements OnInit {
  private itemIds: number[];

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsService.getTopNews().subscribe(
      ids => this.itemIds = ids
    );
  }

}
