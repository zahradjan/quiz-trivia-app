import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs";
import { Question } from "src/app/model/question";
import { QuestionService } from "src/app/service/question.service";

@Component({
  selector: "app-quiz-results-page",
  templateUrl: "./quiz-results-page.component.html",
  styleUrls: ["./quiz-results-page.component.css"],
})
export default class QuizResultsPageComponent implements OnInit {
  questions: Question[] = [];
  score: number = 0;
  constructor(
    private router: Router,
    private questionService: QuestionService,
    private route: ActivatedRoute
  ) {
    this.route.data.pipe(map((data) => console.log(data))).subscribe();
    console.log(this.questionService.getResults());
    this.questions = this.questionService.getResults();
    this.score = this.questionService.getScore();
    console.log(this.questions);
  }
  ngOnInit(): void {
    //
  }

  onClick() {
    this.router.navigate([""]);
  }
}
