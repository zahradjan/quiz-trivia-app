import { QuizItem } from "./quiz-item";

export interface QuizItemData {
  response_code: number;
  results: QuizItem[];
}
