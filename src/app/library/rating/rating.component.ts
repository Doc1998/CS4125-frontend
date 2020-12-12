import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { LibService } from 'src/app/lib-service/lib.service';
import { RatingRequestPayLoad } from './rating.request.payload';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  addRatingForm: FormGroup;
  ratingRequestPayload: RatingRequestPayLoad;
  isError: boolean;
  constructor(private libService:LibService,private authService: AuthService,private router: Router) { 
    this.ratingRequestPayload = {
      bookName: '',
      rating: 0,
      userName: authService.getUserName()
    };
  }

  ngOnInit(): void {
    this.addRatingForm = new FormGroup({
      rating: new FormControl(0),
      bookname: new FormControl(''),
    })
  }
  addRating(){
    this.ratingRequestPayload.bookName = this.addRatingForm.get('bookname').value;
    this.ratingRequestPayload.rating = this.addRatingForm.get('rating').value;


    this.libService.addRating(this.ratingRequestPayload).subscribe(data => {
      if(data){
        this.isError = false;
        this.addRatingForm.get('rating').setValue('')
        this.addRatingForm.get('bookname').setValue('')
      }else{ 
        this.isError = true;
      }
    });
  }

}
