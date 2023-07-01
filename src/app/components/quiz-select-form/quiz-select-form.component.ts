import { Component, Input } from "@angular/core";
import { Category } from "src/app/model/category";

@Component({
  selector: "app-quiz-select-form",
  templateUrl: "./quiz-select-form.component.html",
  styleUrls: ["./quiz-select-form.component.css"],
})
export class QuizSelectFormComponent {
  @Input()
  categories: Category[] = [];
  difficulties = [
    { id: 1, name: "Easy" },
    { id: 2, name: "Medium" },
    { id: 3, name: "Hard" },
  ];
}
