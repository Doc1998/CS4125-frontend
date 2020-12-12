
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AllBooksComponent } from './library/all-books/all-books.component';
import { BooklistComponent } from './library/booklist/booklist.component';
import { GenreListComponent } from './library/genre-list/genre-list.component';
import { HomeComponent } from './library/home/home.component';
import { NameListComponent } from './library/name-list/name-list.component';
import { SearchComponent } from './library/search/search.component';

const routes: Routes = [
  {path:'sign-up',component : SignupComponent},
  {path:'login',component: LoginComponent},
  {path:'home',component: HomeComponent},
  {path:'all',component: AllBooksComponent},
  {path:'search',component: SearchComponent},
  {path:'byAuthor/:id',component: BooklistComponent},
  {path:'byGenre/:id',component: GenreListComponent},
  {path:'byName/:id',component: NameListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
