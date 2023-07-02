import { Observable, of } from "rxjs";
import { Component } from "@angular/core";
import { CategoryService } from "src/app/service/category.service";
import { Category } from "src/app/model/category";
import { Question } from "src/app/model/question";
import { QuestionService } from "src/app/service/question.service";
import { QuestionParams } from "src/app/model/question-params";
import { Answer } from "src/app/model/answer";
import { Router } from "@angular/router";

@Component({
  selector: "app-quiz-page",
  templateUrl: "./quiz-page.component.html",
  styleUrls: ["./quiz-page.component.css"],
})
export class QuizPageComponent {
  categories$: Observable<Category[] | undefined> =
    this.categoryService.getCategories();
  questions$: Observable<Question[] | undefined> = of();
  constructor(
    private categoryService: CategoryService,
    private questionService: QuestionService,
    private router: Router
  ) {}

  onCreate(questionParams: QuestionParams): void {
    this.questions$ = this.questionService.getQuestions(questionParams);
  }
  onAnswersSubmit(answers: Answer[]): void {
    console.log(answers);
    this.questionService.updateQuestions();
    this.router.navigate(["/results"]);
  }
}
