import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookRequestPayLoad } from '../library/home/book.request.payload';
import { BookModel } from './book-model';

@Injectable({
  providedIn: 'root'
})
export class LibService {

  constructor(private httpClient : HttpClient) { 
    
  }
  addBook(bookRequestPayload: BookRequestPayLoad): Observable<any>{
    return this.httpClient.post('http://localhost:8080/api/library/add', bookRequestPayload,{responseType: 'text'});
  }
  getAllBooks(): Observable<Array<BookModel>> {
    return this.httpClient.get<Array<BookModel>>('http://localhost:8080/api/library/all');
  }
  getAllByAuthor(author: String):Observable<any> {
    return this.httpClient.get<Array<BookModel>>('http://localhost:8080/api/library/author/' + author);
  }
  getAllByGenre(genre: String):Observable<any> {
    return this.httpClient.get<Array<BookModel>>('http://localhost:8080/api/library/genre/' + genre);
  }
  getBookByName(name: String):Observable<any> {
    return this.httpClient.get<Array<BookModel>>('http://localhost:8080/api/library/book/' + name);
  }

  }

