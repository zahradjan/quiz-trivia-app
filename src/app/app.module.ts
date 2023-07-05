import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { QuizSelectFormComponent } from "./components/quiz-select-form/quiz-select-form.component";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { ShufflePipe } from "./pipes/shuffle.pipe";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { QuizFormComponent } from "./components/quiz-form/quiz-form.component";
import QuizPageComponent from "./pages/quiz-page/quiz-page.component";
import QuizResultsPageComponent from "./pages/quiz-results-page/quiz-results-page.component";
import { QuizScoreBannerComponent } from "./components/quiz-score-banner/quiz-score-banner.component";
import { QuizResultsDashboardComponent } from "./components/quiz-results-dashboard/quiz-results-dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    QuizPageComponent,
    QuizSelectFormComponent,
    ShufflePipe,
    QuizFormComponent,
    QuizResultsPageComponent,
    QuizScoreBannerComponent,
    QuizResultsDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}