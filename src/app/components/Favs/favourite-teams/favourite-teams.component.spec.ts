import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteTeamsComponent } from './favourite-teams.component';

describe('FavouriteTeamsComponent', () => {
  let component: FavouriteTeamsComponent;
  let fixture: ComponentFixture<FavouriteTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
