import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { LibService } from 'src/app/lib-service/lib.service';
import { BookRequestPayLoad } from './book.request.payload';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  addBookForm: FormGroup;
  bookRequestPayload: BookRequestPayLoad;
  isError: boolean;

  constructor(private libService:LibService,private authService: AuthService,private router: Router) { 
    this.bookRequestPayload = {
      author: '',
      name: '',
      genre: '',
      username: authService.getUserName()
    };
  }

  ngOnInit(): void {
    this.addBookForm = new FormGroup({
      author: new FormControl(''),
      bookname: new FormControl(''),
      genre: new FormControl(''),
    
    })
  }
  addBook(){
    this.bookRequestPayload.author = this.addBookForm.get('author').value;
    this.bookRequestPayload.name = this.addBookForm.get('bookname').value;
    this.bookRequestPayload.genre = this.addBookForm.get('genre').value;


    this.libService.addBook(this.bookRequestPayload).subscribe(data => {
      if(data){
        this.isError = false;
        this.addBookForm.get('author').setValue('')
        this.addBookForm.get('bookname').setValue('')
        this.addBookForm.get('genre').setValue('')

      }else{ 
        this.isError = true;
      }
    });
  }

}
