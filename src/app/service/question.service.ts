import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environment";
import { Answer } from "../model/answer";
import { Question } from "../model/question";
import { QuestionData } from "../model/question-data";
import { QuestionParams } from "../model/question-params";

@Injectable({
  providedIn: "root",
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  questionsResults: Question[] = [];

  getQuestions(questionParams: QuestionParams): Observable<Question[]> {
    console.log(questionParams);
    return this.http
      .get<QuestionData>(`${environment.opentdbUrl}/api.php`, {
        params: {
          amount: 5,
          categoryId: questionParams.categoryId,
          difficulty: questionParams.difficulty,
          type: "multiple",
        },
        headers: {},
      })
      .pipe(map((data) => data.results));
  }

  updateQuestions(answers: Answer[]) {
    this.questionsResults.map((question) => {
      //TODO:dopracovat
      question.selectedAnswer;
    });
  }

  getScore(): number {
    let score: number = 0;
    this.questionsResults.forEach((question: Question) =>
      question.selectedAnswer === question.correct_answer ? score++ : score
    );

    return score;
  }
}
