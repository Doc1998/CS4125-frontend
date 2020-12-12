import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookModel } from 'src/app/shared/book-model';
import { LibService } from 'src/app/shared/lib.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  author: String;
  @Input() b: BookModel[];
  books: Array<BookModel> = [];
  constructor(private libService:LibService,private activateRoute: ActivatedRoute) { 
    this.author = this.activateRoute.snapshot.params.id;
    this.libService.getAllByAuthor(this.author).subscribe(book =>{
      this.books = book;
    })
  }

  ngOnInit(): void {
  }

}
