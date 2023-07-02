import { map } from "rxjs";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from "@angular/forms";
import { Question } from "src/app/model/question";
import { Answer } from "src/app/model/answer";

@Component({
  selector: "app-quiz-form",
  templateUrl: "./quiz-form.component.html",
  styleUrls: ["./quiz-form.component.css"],
})
export class QuizFormComponent {
  @Input()
  set questions(questions: Question[] | undefined) {
    if (questions) {
      this._questions = questions.map((question) => {
        return {
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ],
        };
      });
      this.patch();
    }
  }

  get questions(): Question[] | undefined {
    return this._questions;
  }
  @Output() submit: EventEmitter<Answer> = new EventEmitter<Answer>();

  form: FormGroup;
  private _questions?: Question[];
  constructor(private fb: NonNullableFormBuilder) {
    this.form = this.createForm();

    this.form?.valueChanges
      .pipe(
        map((value) => {
          console.log(value);
        })
      )
      .subscribe();
  }
  private createForm(): FormGroup {
    return this.fb.group({});
  }
  patch() {
    this.questions?.forEach((value, index) => {
      this.form?.addControl(
        "selectedAnswer" + index,
        new FormControl("", { validators: Validators.required })
      );
      this.form?.addControl("question" + index, new FormControl(""));
    });
    console.log(this.form);
  }

  submitAnswers(): void {
    console.log(this.form.value);
    this.submit.emit(this.form.value);
  }
}
