import { of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DifficultyService {
  private difficulties: string[] = ["Easy", "Medium", "Hard"];
  constructor() {}

  getDifficulties() {
    return of(this.difficulties);
  }
}
