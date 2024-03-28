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

  listType = 'grid'
  appService = inject(AppService)

  constructor() { }

  ngOnInit() {
  }

  setListType(type){
    this.listType = type
  }

  openTripModal(){
    this.appService.openTripModal.next(true)
  }

}
