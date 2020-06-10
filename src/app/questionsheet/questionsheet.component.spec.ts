import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsheetComponent } from './questionsheet.component';

describe('QuestionsheetComponent', () => {
  let component: QuestionsheetComponent;
  let fixture: ComponentFixture<QuestionsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
