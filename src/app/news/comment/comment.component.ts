import {Component, OnInit, Input} from '@angular/core';
import {NewsService} from "../news.service";
import {Item} from "../item.model";

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() itemId: number;
  private item: Item;

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsService.getItem(this.itemId).subscribe(
      item => this.item = item
    );
  }

}
