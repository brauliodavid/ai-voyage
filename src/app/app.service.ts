import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root',
  })
  export class AppService {
    themeToggle = false;

    // Add or remove the "dark" class on the document body
    toggleDarkTheme(shouldAdd) {
        document.body.classList.toggle('dark', shouldAdd);
        this.themeToggle = !this.themeToggle
    }
  }