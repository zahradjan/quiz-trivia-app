import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuizPageComponent } from "./pages/quiz-page/quiz-page.component";
import QuizResultsPageComponent from "./pages/quiz-results-page/quiz-results-page.component";

const routes: Routes = [
  {
    path: "",
    component: QuizPageComponent,
  },
  {
    path: "results",
    component: QuizResultsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
