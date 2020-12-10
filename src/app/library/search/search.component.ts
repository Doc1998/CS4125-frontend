import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookModel } from 'src/app/shared/book-model';
import { LibService } from 'src/app/shared/lib.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  allByGenre: FormGroup
  allByAuthor: FormGroup
  author: String
  genre: String
  bookname: String
  searchName: FormGroup
  isError: boolean;
  books: Array<BookModel> = [];
  constructor(private libService:LibService,private router: Router) { 
   
  }

  ngOnInit(): void {
    this.searchName = new FormGroup({
      bookname : new FormControl('')
    })
    this.allByAuthor = new FormGroup({
      author : new FormControl('Donal')
    })
    this.allByGenre = new FormGroup({
      genre : new FormControl('')
    })

    this.author = this.allByAuthor.get('author').value
  }
  setAll(){
    this.author = this.allByAuthor.get('author').value
    this.genre = this.allByGenre.get('genre').value
    this.bookname = this.searchName.get('bookname').value
  }

}
