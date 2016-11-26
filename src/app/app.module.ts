import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.routes";
import {NewsModule} from "./news/news.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    NewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
