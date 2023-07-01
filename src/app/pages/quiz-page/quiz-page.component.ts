import { Observable, of } from "rxjs";
import { Component } from "@angular/core";
import { CategoryService } from "src/app/service/category.service";
import { Category } from "src/app/model/category";
import { Question } from "src/app/model/question";
import { QuestionService } from "src/app/service/question.service";
import { QuestionParams } from "src/app/model/question-params";

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
    private questionService: QuestionService
  ) {}

  onCreate(questionParams: QuestionParams) {
    this.questions$ = this.questionService.getQuestions(questionParams);
  }
}
