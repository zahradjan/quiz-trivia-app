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
import { QuizItem } from "src/app/model/quiz-item";

@Component({
  selector: "app-quiz-form",
  templateUrl: "./quiz-form.component.html",
  styleUrls: ["./quiz-form.component.css"],
})
export class QuizFormComponent implements OnInit {
  @Input()
  quizItems: QuizItem[] = [];

  @Output() submit: EventEmitter<QuizItem[]> = new EventEmitter<
    QuizItem[]
  >();

  form: FormGroup;
  constructor(private fb: NonNullableFormBuilder) {
    this.form = this.createQuizItemsForm();
  }
  ngOnInit(): void {
    const quizItems: FormArray = <FormArray>this.form.get("quizItems");

    this.quizItems.forEach((quizItem: QuizItem, index: number) => {
      quizItems.push(this.createQuizItemForm());
      quizItems.at(index).patchValue(quizItem);
    });
  }
  private createQuizItemsForm(): FormGroup {
    return this.fb.group({
      quizItems: this.fb.array([]),
    });
  }

  private createQuizItemForm(): FormGroup {
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

  submitQuizItems(): void {
    const { quizItems } = this.form.value;
    this.submit.emit(quizItems);
  }
}
