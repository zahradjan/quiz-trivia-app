import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizScoreBannerComponent } from './quiz-score-banner.component';

describe('QuizScoreBannerComponent', () => {
  let component: QuizScoreBannerComponent;
  let fixture: ComponentFixture<QuizScoreBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizScoreBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizScoreBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
