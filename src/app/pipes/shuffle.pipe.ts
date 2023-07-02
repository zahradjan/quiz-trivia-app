import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shuffle",
})
export class ShufflePipe implements PipeTransform {
  transform(array: string[]): string[] {
    if (array) {
      var m: number = array.length,
        t,
        i;

      while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
    }
    return array;
  }
}
