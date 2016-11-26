import {Routes} from "@angular/router";
import {NewsListComponent} from "./news/news-list/news-list.component";
import {NewsDetailsComponent} from "./news/news-details/news-details.component";
import {NewsComponent} from "./news/news.component";

export const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'news', pathMatch: 'full'},
  {
    path: 'news',
    component: NewsComponent,
    children: [
      {path: '', component: NewsListComponent},
      {path: ':id', component: NewsDetailsComponent}
    ]
  },
  {path: '**', redirectTo: 'news'}
];