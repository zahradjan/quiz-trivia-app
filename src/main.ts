import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { bootstrapApplication } from "@angular/platform-browser";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { appRoutes } from "./app/app.routes";

export const providers = [
  provideRouter(appRoutes),
  provideHttpClient(withInterceptorsFromDi()),
  importProvidersFrom(BrowserAnimationsModule),
];

bootstrapApplication(AppComponent, {
  providers,
}).catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
});
