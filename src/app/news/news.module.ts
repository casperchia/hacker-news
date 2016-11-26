import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NewsComponent} from "./news.component";
import {NewsListComponent} from "./news-list/news-list.component";
import {NewsDetailsComponent} from "./news-details/news-details.component";
import {RouterModule} from "@angular/router";
import {NewsService} from "./news.service";
import {NewsItemComponent} from "./news-item/news-item.component";
import {PaginationModule} from "ng2-bootstrap";

@NgModule({
  declarations: [
    NewsComponent,
    NewsListComponent,
    NewsDetailsComponent,
    NewsItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PaginationModule
  ],
  providers: [
    NewsService
  ]
})
export class NewsModule {
}
