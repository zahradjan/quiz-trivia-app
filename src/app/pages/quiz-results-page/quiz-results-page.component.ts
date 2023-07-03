import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { QuizItem } from "src/app/model/quiz-item";
import { QuizItemService } from "src/app/service/quiz-item.service";

@Component({
  selector: "app-quiz-results-page",
  templateUrl: "./quiz-results-page.component.html",
  styleUrls: ["./quiz-results-page.component.css"],
})
export default class QuizResultsPageComponent {
  quizItems: QuizItem[] = [];
  score: number = 0;
  constructor(
    private router: Router,
    private quizItemService: QuizItemService
  ) {
    this.quizItems = this.quizItemService.getAnsweredQuizItems();
    this.score = this.quizItemService.getScore();
  }

  onClick(): void {
    this.router.navigate([""]);
  }
}
