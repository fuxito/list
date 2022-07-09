import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './item';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ClientListServiceService {
  private url = 'http://localhost:5020';

  constructor(private http: HttpClient) {}

  postItem(item: Item): Observable<Item> {
    console.log('posted');
    return this.http.post<Item>(
      'http://localhost:5020/postitem',
      item,
      httpOptions
    );
  }

  // getItems(): Item[] {
  //   console.log(this.items);
  //   return this.items;
  // }
}
