import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environment";
import { Question } from "../model/question";
import { QuestionData } from "../model/question-data";
import { QuestionParams } from "../model/question-params";

@Injectable({
  providedIn: "root",
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  private questionsResults: Question[] = [];

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

  updateQuestions(updatedQuestions: Question[]) {
    this.questionsResults = updatedQuestions;
    console.log(this.questionsResults);
  }

  getResults(): Question[] {
    return this.questionsResults;
  }

  getScore(): number {
    let score: number = 0;
    console.log(this.questionsResults);
    this.questionsResults.forEach((question: Question) =>
      question.selectedAnswer === question.correct_answer ? score++ : score
    );

    return score;
  }
}
