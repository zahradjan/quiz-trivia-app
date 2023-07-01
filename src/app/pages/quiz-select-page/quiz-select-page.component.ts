import { Observable } from "rxjs";
import { Component } from "@angular/core";
import { CategoryService } from "src/app/service/category.service";
import { Category } from "src/app/model/category";

@Component({
  selector: "app-quiz-select-page",
  templateUrl: "./quiz-select-page.component.html",
  styleUrls: ["./quiz-select-page.component.css"],
})
export class QuizSelectPageComponent {
  categories$: Observable<Category[] | undefined> =
    this.categoryService.getCategories();

  constructor(private categoryService: CategoryService) {}
}
