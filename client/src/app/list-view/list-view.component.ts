import { Component, OnInit } from '@angular/core';
import { ClientListServiceService } from '../client-list-service.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
})
export class ListViewComponent implements OnInit {
  listArr: string[] = [];

  constructor(private clientListService: ClientListServiceService) {}

  ngOnInit(): void {
    // this.getAllItems();
  }
  // getAllItems(): void {
  //   this.clientListService.getItems().forEach((item) => {
  //     this.listArr.push(item.item);
  //     console.log(item.item);
  //   });
  // }
}
