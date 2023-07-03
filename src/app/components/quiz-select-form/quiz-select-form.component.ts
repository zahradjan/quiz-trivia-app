import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from "@angular/forms";
import { Category } from "src/app/model/category";
import { QuizParams } from "src/app/model/quiz-params";

@Component({
  selector: "app-quiz-select-form",
  templateUrl: "./quiz-select-form.component.html",
  styleUrls: ["./quiz-select-form.component.css"],
})
export class QuizSelectFormComponent {
  @Input()
  categories: Category[] = [];
  @Input()
  difficulties: string[] = [];

  @Output() create: EventEmitter<QuizParams> =
    new EventEmitter<QuizParams>();

  form: FormGroup;
  constructor(private fb: NonNullableFormBuilder) {
    this.form = this.createForm();
  }

  submit(): void {
    this.create.emit(this.form.value);
  }

  private createForm(): FormGroup {
    return this.fb.group({
      categoryId: [undefined, Validators.required],
      difficulty: [undefined, Validators.required],
    });
  }
}
