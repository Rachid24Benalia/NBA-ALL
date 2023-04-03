import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritePLayersComponent } from './favourite-players.component';

describe('FavouritePLayersComponent', () => {
  let component: FavouritePLayersComponent;
  let fixture: ComponentFixture<FavouritePLayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritePLayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouritePLayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
