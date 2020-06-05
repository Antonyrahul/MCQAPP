import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquestionpaperComponent } from './addquestionpaper.component';

describe('AddquestionpaperComponent', () => {
  let component: AddquestionpaperComponent;
  let fixture: ComponentFixture<AddquestionpaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddquestionpaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquestionpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
