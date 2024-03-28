import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root',
  })
  export class AppService {
    themeToggle = false;
    openTripMenu = new BehaviorSubject<boolean>(false)
    openTripModal = new BehaviorSubject<boolean>(false)

    // Add or remove the "dark" class on the document body
    toggleDarkTheme(shouldAdd) {
        document.body.classList.toggle('dark', shouldAdd);
        this.themeToggle = !this.themeToggle
    }
  }