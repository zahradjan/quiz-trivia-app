import { Question } from "./question";

export interface QuestionData {
  response_code: number;
  results: Question[];
}
