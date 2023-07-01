import { Input } from "@angular/core";
import { Component } from "@angular/core";
import { Question } from "src/app/model/question";

@Component({
  selector: "app-quiz-question",
  templateUrl: "./quiz-question.component.html",
  styleUrls: ["./quiz-question.component.css"],
})
export class QuizQuestionComponent {
  @Input()
  question?: Question;
}
