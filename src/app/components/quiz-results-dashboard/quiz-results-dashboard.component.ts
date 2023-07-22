import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatButtonModule } from "@angular/material/button";
import { Component, Input } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { QuizItem } from "src/app/model/quiz-item";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-quiz-results-dashboard",
  templateUrl: "./quiz-results-dashboard.component.html",
  styleUrls: ["./quiz-results-dashboard.component.css"],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
  ],
})
export class QuizResultsDashboardComponent {
  @Input() quizItems: QuizItem[] = [];
}
