import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {Item} from "./item.model";

const API_URL = "https://hacker-news.firebaseio.com/v0";

@Injectable()
export class NewsService {

  constructor(private http: Http) {
  }

  getTopNews(): Observable<number[]> {
    return this.http.get(`${API_URL}/topstories.json`)
      .map(res => res.json());
  }

  getItem(id: number): Observable<Item> {
    return this.http.get(`${API_URL}/item/${id}.json`)
      .map(res => res.json());
  }

}