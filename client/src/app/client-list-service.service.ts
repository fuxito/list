import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class ClientListServiceService {
  items: Item[] = [];
  constructor() {}

  postItem(item: Item): void {
    this.items.push(item);
    console.log(this.items);
  }

  getItems(): Item[] {
    console.log(this.items);

    return this.items;
  }
}
