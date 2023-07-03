import { EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Component } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";
import { Question } from "src/app/model/question";

@Component({
  selector: "app-quiz-question",
  templateUrl: "./quiz-question.component.html",
  styleUrls: ["./quiz-question.component.css"],
})
export class QuizQuestionComponent implements OnInit {
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
  @Input() formGroupName!: string | number;

  @Output() answerSelect: EventEmitter<Question> = new EventEmitter();

  private _question?: any;

  form: FormGroup = new FormGroup({});
  constructor(private rootFormGroup: FormGroupDirective) {}
  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(
      `${this.formGroupName}`
    ) as FormGroup;
    console.log(
      this.rootFormGroup.control.get(`${this.formGroupName}`) as FormGroup
    );
  }
}
