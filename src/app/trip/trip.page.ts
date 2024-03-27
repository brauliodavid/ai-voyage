import { Component, OnInit, inject } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.scss'],
})
export class TripPage implements OnInit {

  appService = inject(AppService)

  constructor() { }

  ngOnInit() {
  }

}
