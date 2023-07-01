import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSelectFormComponent } from './quiz-select-form.component';

describe('QuizSelectFormComponent', () => {
  let component: QuizSelectFormComponent;
  let fixture: ComponentFixture<QuizSelectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizSelectFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizSelectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
