import { map } from "rxjs";
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import {
  FormArray,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from "@angular/forms";
import { Question } from "src/app/model/question";

@Component({
  selector: "app-quiz-form",
  templateUrl: "./quiz-form.component.html",
  styleUrls: ["./quiz-form.component.css"],
})
export class QuizFormComponent implements OnInit {
  // @Input()
  // questions: Question[] | undefined;
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
    }
  }

  get questions(): Question[] | undefined {
    return this._questions;
  }
  @Output() submit: EventEmitter<{ answers: Question[] }> =
    new EventEmitter<{ answers: Question[] }>();

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
  ngOnInit(): void {
    const questionResults = this.form.get("answers") as FormArray;

    this.questions?.forEach((question, index) => {
      questionResults.push(this.createAnswerForm());
      questionResults.at(index).patchValue(question);
    });
  }
  private createForm(): FormGroup {
    return this.fb.group({
      answers: this.fb.array([]),
    });
  }

  private createAnswerForm(): FormGroup {
    return this.fb.group({
      category: [undefined],
      type: [undefined],
      difficulty: [undefined],
      question: [undefined],
      correct_answer: [undefined],
      incorrect_answers: [undefined],
      answers: [undefined],
      selectedAnswer: [undefined, Validators.required],
    });
  }

  submitAnswers(): void {
    console.log(this.form.value);
    this.submit.emit(this.form.value);
  }
}
