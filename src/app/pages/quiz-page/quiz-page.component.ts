import { Observable } from "rxjs";
import { Component } from "@angular/core";
import { CategoryService } from "src/app/service/category.service";
import { Category } from "src/app/model/category";
import { QuizItem } from "src/app/model/quiz-item";
import { QuizItemService } from "src/app/service/quiz-item.service";
import { QuizParams } from "src/app/model/quiz-params";
import { Router } from "@angular/router";
import { EMPTY } from "rxjs";
import { DifficultyService } from "src/app/service/difficulty.service";
import { QuizSelectFormComponent } from "src/app/components/quiz-select-form/quiz-select-form.component";
import { QuizFormComponent } from "src/app/components/quiz-form/quiz-form.component";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-quiz-page",
  templateUrl: "./quiz-page.component.html",
  styleUrls: ["./quiz-page.component.css"],
  standalone: true,
  imports: [CommonModule, QuizSelectFormComponent, QuizFormComponent],
})
export default class QuizPageComponent {
  categories$: Observable<Category[] | undefined>;
  difficulties$: Observable<string[] | undefined>;
  quizItems$: Observable<QuizItem[] | undefined>;
  constructor(
    private categoryService: CategoryService,
    private quizItemService: QuizItemService,
    private difficultyService: DifficultyService,
    private router: Router
  ) {
    this.categories$ = this.categoryService.getCategories();
    this.quizItems$ = EMPTY;
    this.difficulties$ = this.difficultyService.getDifficulties();
  }

  onCreate(quizParams: QuizParams): void {
    this.quizItems$ = this.quizItemService.getQuizItems(quizParams);
  }
  onAnswersSubmit(answeredQuizItems: QuizItem[]): void {
    this.quizItemService.updateQuizItems(answeredQuizItems);
    this.router.navigate(["/results"]);
  }
}
