import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Question } from "src/app/model/question";
import { QuestionService } from "src/app/service/question.service";

@Component({
  selector: "app-quiz-results-page",
  templateUrl: "./quiz-results-page.component.html",
  styleUrls: ["./quiz-results-page.component.css"],
})
export default class QuizResultsPageComponent {
  //TODO: getovat ze servici
  questions: Question[] = [
    {
      category: "test",
      correct_answer: "test1",
      difficulty: "easy",
      incorrect_answers: ["test2", "test3"],
      question: "Test Question?",
      type: "",
      selectedAnswer: "test1",
      answers: ["test1", "test2", "test3"],
    },
    {
      category: "test",
      correct_answer: "test1",
      difficulty: "easy",
      incorrect_answers: ["test2", "test3"],
      question: "Test Question?",
      type: "",
      selectedAnswer: "test2",
      answers: ["test1", "test2", "test3"],
    },
  ];
  score: number;
  constructor(
    private router: Router,
    private questionService: QuestionService
  ) {
    this.score = this.questionService.getScore();
  }

  onClick() {
    this.router.navigate([""]);
  }
}
