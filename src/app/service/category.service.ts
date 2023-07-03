import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environment";
import { Observable, map, catchError } from "rxjs";
import { Category } from "../model/category";
import { CategoryData } from "../model/category-data";
@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http
      .get<CategoryData>(`${environment.opentdbUrl}/api_category.php`)
      .pipe(
        map((data) => data.trivia_categories),
        catchError((err) => {
          throw Error(err);
        })
      );
  }
}
