
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AllBooksComponent } from './library/all-books/all-books.component';
import { HomeComponent } from './library/home/home.component';
import { SearchComponent } from './library/search/search.component';

const routes: Routes = [
  {path:'sign-up',component : SignupComponent},
  {path:'login',component: LoginComponent},
  {path:'home',component: HomeComponent},
  {path:'all',component: AllBooksComponent},
  {path:'search',component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
