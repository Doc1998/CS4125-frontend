import { Component, Input, OnInit } from '@angular/core';
import { RatingModel } from 'src/app/lib-service/rating-model';

@Component({
  selector: 'app-rating-tile',
  templateUrl: './rating-tile.component.html',
  styleUrls: ['./rating-tile.component.css']
})
export class RatingTileComponent implements OnInit {
  @Input() ratings:RatingModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
