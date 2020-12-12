import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from 'src/app/shared/book-model';

@Component({
  selector: 'app-book-tile',
  templateUrl: './book-tile.component.html',
  styleUrls: ['./book-tile.component.css']
})
export class BookTileComponent implements OnInit {

  @Input() books:BookModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
