import { Component, Input } from "@angular/core";

@Component({
  selector: "app-quiz-score-banner",
  templateUrl: "./quiz-score-banner.component.html",
  styleUrls: ["./quiz-score-banner.component.css"],
})
export class QuizScoreBannerComponent {
  @Input()
  score: number = 0;
}
