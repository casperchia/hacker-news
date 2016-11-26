import {Component, OnInit, Input} from "@angular/core";
import {NewsService} from "../news.service";
import {Item} from "../item.model";

@Component({
  selector: 'news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() itemId: number;
  private item: Item;

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsService.getItem(this.itemId).subscribe(
      item => this.item = item
    )
  }

}
