import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClientListServiceService } from '../client-list-service.service';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css'],
})
export class ListFormComponent implements OnInit {
  listForm = this.formBuilder.group({
    item: '',
  });

  listArr: string[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private clientListService: ClientListServiceService
  ) {}

  ngOnInit(): void {}

  addItem(): void {
    if (this.listForm.value.item)
      this.clientListService.postItem({ item: this.listForm.value.item });
    console.log(this.listArr);
    this.listForm.reset();
  }
}
