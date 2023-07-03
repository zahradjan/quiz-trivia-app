import { ComponentFixture, TestBed } from "@angular/core/testing";

import { QuizResultsDashboardComponent } from "./quiz-results-dashboard.component";

describe("QuizResultsFormComponent", () => {
  let component: QuizResultsDashboardComponent;
  let fixture: ComponentFixture<QuizResultsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizResultsDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizResultsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
