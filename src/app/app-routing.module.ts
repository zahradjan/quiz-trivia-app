import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuizSelectPageComponent } from "./pages/quiz-select-page/quiz-select-page.component";

const routes: Routes = [
  {
    path: "",
    component: QuizSelectPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
