import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;

  listType = 'grid'
  appService = inject(AppService)
  router = inject(Router)
  loadingTrip = false

  step = 1

  constructor() { }

  ngOnInit() {
  }

  setListType(type){
    this.listType = type
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.step = 1
  }

  confirm() {
    this.loadingTrip = true
    setTimeout(() => {
      this.modal.dismiss(null, 'confirm');
      this.router.navigate(['trips/1'])
      this.step = 1
      this.loadingTrip = false
    }, 5000)
  }

  open(){
    this.modal.present()
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<any>;
    this.step = 1
    this.loadingTrip = false
  }

  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  next(){
    this.step += 1
  }

  prev(){
    this.step -= 1
  }

}
