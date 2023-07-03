import { Pipe, PipeTransform } from "@angular/core";
import { marked } from "marked";
import { mangle } from "marked-mangle";
@Pipe({
  name: "markdownToHtml",
})
export class MarkdownToHtmlPipe implements PipeTransform {
  transform(value: string): string {
    marked.use(mangle());
    if (value && value.length > 0) {
      return marked(value, { headerIds: false });
    }
    return value;
  }
}
