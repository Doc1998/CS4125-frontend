import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookModel } from 'src/app/lib-service/book-model';
import { LibService } from 'src/app/lib-service/lib.service';


@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css']
})
export class NameListComponent implements OnInit {

  name: String;
  @Input() b: BookModel[];
  books: Array<BookModel> = [];
  constructor(private libService:LibService,private activateRoute: ActivatedRoute) { 
    this.name = this.activateRoute.snapshot.params.id;
    this.libService.getBookByName(this.name).subscribe(book =>{
      this.books = book;
    })
  }

  ngOnInit(): void {
  }
}
