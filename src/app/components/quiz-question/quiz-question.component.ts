import { map } from "rxjs";
import { EventEmitter, Input, Output } from "@angular/core";
import { Component } from "@angular/core";
import {
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from "@angular/forms";
import { Question } from "src/app/model/question";

@Component({
  selector: "app-quiz-question",
  templateUrl: "./quiz-question.component.html",
  styleUrls: ["./quiz-question.component.css"],
})
export class QuizQuestionComponent {
  @Input()
  set question(question: Question) {
    this._question = {
      ...question,
      answers: [question.correct_answer, ...question.incorrect_answers],
    };
    this.form.patchValue(this._question);
  }
  get question() {
    return this._question;
  }

  @Output() answerSelect: EventEmitter<Question> = new EventEmitter();

  private _question?: any;

  form: FormGroup;
  constructor(private fb: NonNullableFormBuilder) {
    this.form = this.createForm();

    this.form
      .get("selectedAnswer")
      ?.valueChanges.pipe(
        map((selectedAnswer) => {
          if (this.form.valid) {
            const question = { ...this.question, selectedAnswer };
            this.answerSelect.emit(question);
          }
        })
      )
      .subscribe();
  }
  private createForm(): FormGroup {
    return this.fb.group({
      selectedAnswer: [undefined, Validators.required],
    });
  }
}
