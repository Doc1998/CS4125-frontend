import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/lib-service/book-model';
import { LibService } from 'src/app/lib-service/lib.service';


@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  books: Array<BookModel> = [];

  constructor(private libService:LibService) {
    this.libService.getAllBooks().subscribe(book =>{
      this.books = book;
    })
   }

  ngOnInit(): void {
  }

}
