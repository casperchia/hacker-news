import {Component, OnInit} from '@angular/core';
import {NewsService} from "../news.service";
import {ActivatedRoute} from "@angular/router";
import {Item} from "../item.model";

@Component({
  selector: 'news-details',
  templateUrl: 'news-details.component.html',
  styleUrls: ['news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  private itemId: number;
  private item: Item = <Item>{};

  constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.itemId = this.activatedRoute.snapshot.params['id'];
    this.newsService.getItem(this.itemId).subscribe(
      item => this.item = item
    );
  }
}
