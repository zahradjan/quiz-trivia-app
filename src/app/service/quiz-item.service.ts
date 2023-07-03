import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, catchError } from "rxjs";
import { environment } from "src/environment";
import { QuizItem } from "../model/quiz-item";
import { QuizItemData } from "../model/quiz-item-data";
import { QuizParams } from "../model/quiz-params";

@Injectable({
  providedIn: "root",
})
export class QuizItemService {
  constructor(private http: HttpClient) {}

  private answeredQuizItems: QuizItem[] = [];

  getQuizItems(quizParams: QuizParams): Observable<QuizItem[]> {
    return this.http
      .get<QuizItemData>(`${environment.opentdbUrl}/api.php`, {
        params: {
          amount: 5,
          categoryId: quizParams.categoryId,
          difficulty: quizParams.difficulty,
          type: "multiple",
        },
      })
      .pipe(
        map((data) =>
          data.results.map((result) => {
            const answers = [
              result.correct_answer,
              ...result.incorrect_answers,
            ];
            return {
              ...result,
              answers,
            };
          })
        ),
        catchError((err) => {
          throw Error(err);
        })
      );
  }

  updateQuizItems(answeredQuizItems: QuizItem[]): void {
    this.answeredQuizItems = answeredQuizItems;
  }

  getAnsweredQuizItems(): QuizItem[] {
    return this.answeredQuizItems;
  }

  getScore(): number {
    let score: number = 0;
    this.answeredQuizItems.forEach((quizItem: QuizItem) =>
      quizItem.selectedAnswer === quizItem.correct_answer ? score++ : score
    );

    return score;
  }
}
