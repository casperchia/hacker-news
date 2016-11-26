import {Component, OnInit} from "@angular/core";
import {NewsService} from "../news.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'news-list',
  templateUrl: 'news-list.component.html',
  styleUrls: ['news-list.component.css']
})
export class NewsListComponent implements OnInit {
  private itemIds: number[];
  private totalItemCount: number = 0;
  private currentPage: number = 1;
  private currentItems: number[];
  private pageSize: number = 30;

  constructor(private newsService: NewsService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // TODO: unable to set the currentpage based on url param due to an expression changed error.
    // https://github.com/valor-software/ng2-bootstrap/issues/862
    // this.currentPage = this.activatedRoute.snapshot.params['page'] ? this.activatedRoute.snapshot.params['page'] : this.currentPage;
    this.newsService.getTopNews().subscribe(
      ids => {
        this.itemIds = ids;
        this.totalItemCount = this.itemIds.length;
        this.currentItems = this.itemIds.slice(this.startIndex(this.currentPage), this.endIndex(this.currentPage));
      }
    );
  }

  updateList(event) {
    this.currentPage = event.page;
    this.currentItems = this.itemIds.slice(this.startIndex(this.currentPage), this.endIndex(this.currentPage));
    console.log(this.startIndex(this.currentPage), this.endIndex(this.currentPage));
    this.router.navigate(['/news', {page: this.currentPage}]);
  }

  startIndex(page: number): number {
    return ((page - 1) * this.pageSize) + 1;
  }

  endIndex(page: number): number {
    return ((page) * this.pageSize) + 1;
  }

}
