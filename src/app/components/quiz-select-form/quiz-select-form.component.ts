import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup, NonNullableFormBuilder } from "@angular/forms";
import { Category } from "src/app/model/category";
import { QuestionParams } from "src/app/model/question-params";

@Component({
  selector: "app-quiz-select-form",
  templateUrl: "./quiz-select-form.component.html",
  styleUrls: ["./quiz-select-form.component.css"],
})
export class QuizSelectFormComponent {
  @Input()
  categories: Category[] = [];

  @Output() create: EventEmitter<QuestionParams> =
    new EventEmitter<QuestionParams>();
  difficulties = ["Easy", "Medium", "Hard"];

  form: FormGroup;
  constructor(private fb: NonNullableFormBuilder) {
    this.form = this.createForm();
  }

  submit() {
    console.log(this.form.value);
    this.create.emit(this.form.value);
  }

  private createForm(): FormGroup {
    return this.fb.group({
      categoryId: [undefined],
      difficulty: [undefined],
    });
  }
}
