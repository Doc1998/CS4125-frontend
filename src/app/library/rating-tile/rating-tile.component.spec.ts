import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingTileComponent } from './rating-tile.component';

describe('RatingTileComponent', () => {
  let component: RatingTileComponent;
  let fixture: ComponentFixture<RatingTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
