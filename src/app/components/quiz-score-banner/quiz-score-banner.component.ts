import { MatCardModule } from "@angular/material/card";
import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-quiz-score-banner",
  templateUrl: "./quiz-score-banner.component.html",
  styleUrls: ["./quiz-score-banner.component.css"],
  standalone: true,
  imports: [CommonModule, MatCardModule],
})
export class QuizScoreBannerComponent {
  @Input()
  score: number = 0;
}
