import { Component, Input } from "@angular/core";
import { QuizItem } from "src/app/model/quiz-item";

@Component({
  selector: "app-quiz-results-dashboard",
  templateUrl: "./quiz-results-dashboard.component.html",
  styleUrls: ["./quiz-results-dashboard.component.css"],
})
export class QuizResultsDashboardComponent {
  @Input() quizItems: QuizItem[] = [];
}
