import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HomeComponent } from './library/home/home.component';
import { AllBooksComponent } from './library/all-books/all-books.component';
import { BookTileComponent } from './library/book-tile/book-tile.component';
import { SearchComponent } from './library/search/search.component';
import { BooklistComponent } from './library/booklist/booklist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AllBooksComponent,
    BookTileComponent,
    SearchComponent,
    BooklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserModule,
   // BrowserAnimationsModule,
   // ToastrModule.forRoot(),
    //FontAwesomeModule,
    //EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
