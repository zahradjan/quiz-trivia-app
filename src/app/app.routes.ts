import { Routes } from "@angular/router";
import QuizPageComponent from "./pages/quiz-page/quiz-page.component";
import QuizResultsPageComponent from "./pages/quiz-results-page/quiz-results-page.component";

export const appRoutes: Routes = [
  {
    path: "",
    component: QuizPageComponent,
  },
  {
    path: "results",
    component: QuizResultsPageComponent,
  },
];
