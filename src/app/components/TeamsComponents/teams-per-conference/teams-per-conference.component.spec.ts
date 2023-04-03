import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsPerConferenceComponent } from './teams-per-conference.component';

describe('TeamsPerConferenceComponent', () => {
  let component: TeamsPerConferenceComponent;
  let fixture: ComponentFixture<TeamsPerConferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsPerConferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsPerConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
