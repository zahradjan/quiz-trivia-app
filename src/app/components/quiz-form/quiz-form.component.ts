import { CommonModule } from "@angular/common";
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
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { QuizItem } from "src/app/model/quiz-item";
import { ShufflePipe } from "src/app/pipes/shuffle.pipe";

@Component({
  selector: "app-quiz-form",
  templateUrl: "./quiz-form.component.html",
  styleUrls: ["./quiz-form.component.css"],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    ShufflePipe,
  ],
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
