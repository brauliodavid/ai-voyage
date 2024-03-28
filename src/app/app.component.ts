import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { AppService } from './app.service';
import { IonMenu, IonModal } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Путешествия', url: '/trips', icon: 'paper-plane' },
    { title: 'Сообщения', url: '/outbox', icon: 'mail' },
    { title: 'Избранное', url: '/favorites', icon: 'heart' },
    // { title: 'Archived', url: '/archived', icon: 'archive' },
    { title: 'Удалённые', url: '/trash', icon: 'trash' },
  ];
  public labels = ['Семья', 'Друзья', 'Работа', 'Путешествие'];
  constructor() {}

  appService = inject(AppService)
  step = 1
  paying = false
  successPayment = false

  router = inject(Router)
  loadingTrip = false
  stepTrip = 1

  count = 0

  regimen = 'месяц'

  @ViewChild(IonModal) modal: IonModal
  @ViewChild('tripModal') tripModal: IonModal
  @ViewChild('tripMenu') tripMenu: IonMenu

  ngOnInit() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize the dark theme based on the initial
    // value of the prefers-color-scheme media query
    this.initializeDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkTheme(mediaQuery.matches));

    this.appService.openTripMenu.subscribe((open) => {
      if(open){
        this.tripMenu.open()
      }else{
        this.tripMenu?.close()
      }
    })

    this.appService.openTripModal.subscribe((open) => {
      if(open){
        this.tripModal.present()
      }else{
        this.tripModal?.dismiss()
      }
    })
  }

  // Check/uncheck the toggle and update the theme based on isDark
  initializeDarkTheme(isDark) {
    this.appService.themeToggle = isDark;
    this.appService.toggleDarkTheme(isDark);
  }

  // Listen for the toggle check/uncheck to toggle the dark theme
  toggleChange(ev) {
    this.appService.toggleDarkTheme(ev.detail.checked);
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<any>;
    this.step = 1
    this.successPayment = false
  }

  pay(){
    this.paying = true
    setTimeout(() => {
      this.successPayment = true
      setTimeout(() => {
        this.cancel()
        this.successPayment = false
      }, 3000)
      this.paying = false
      this.step = 1
    }, 3000)
  }

  cancelTrip() {
    this.appService.openTripModal.next(false)
  }

  confirmTrip() {
    this.loadingTrip = true
    setTimeout(() => {
      this.appService.openTripModal.next(false)
      this.router.navigate(['trips/1'])
    }, 5000)
  }

  onWillDismissTrip(event: Event) {
    const ev = event as CustomEvent<any>;
    this.stepTrip = 1
    this.loadingTrip = false
  }

  next(){
    this.stepTrip += 1
  }

  prev(){
    this.stepTrip -= 1
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
  
}
