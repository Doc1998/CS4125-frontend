import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookModel } from 'src/app/lib-service/book-model';
import { LibService } from 'src/app/lib-service/lib.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {
  genre: String;
  @Input() b: BookModel[];
  books: Array<BookModel> = [];
  constructor(private libService:LibService,private activateRoute: ActivatedRoute) { 
    this.genre = this.activateRoute.snapshot.params.id;
    this.libService.getAllByGenre(this.genre).subscribe(book =>{
      this.books = book;
    })
  }

  ngOnInit(): void {
  }

}
