import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { AppService } from '../app.service';
import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.scss'],
})
export class TripPage implements OnInit {

  appService = inject(AppService)

  days = [
    {
      id: 1,
      date: '14 Марта',
      active: false,
      title: 'Поездка в Наяпул и поход в Уллери',
      description: 'В то время как ранние путешествия, как правило, были более медленными, более опасными и в них в большей степени преобладали торговля и миграция, культурный и технологический прогресс на протяжении многих лет, как правило, означал, что путешествия стали проще и доступнее. Этой тенденции способствовало развитие технологий в таких разнообразных областях, как конные перевозки и скоростные поезда.',
      image: 'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/11/hero2-bg.jpg',
      images: [
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/6-1-900x490.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/11/hero2-bg.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/1-1-900x490.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/10-900x490.jpg'
      ]
    },
    {
      id: 2,
      date: '15 Марта',
      active: true,
      title: 'Поход в Горепани',
      description: 'Дворец пятидесяти пяти окон. Этот великолепный дворец был построен во время правления короля Якшья Маллы в 1427 году нашей эры и впоследствии был реконструирован королем Бхупатиндрой Маллой в семнадцатом веке. Среди кирпичных стен с изящной обстановкой и скульптурным оформлением находится балкон с «Пятьдесят пятью окнами», считающийся уникальным шедевром резьбы по дереву.',
      image: 'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/1-1-900x490.jpg',
      images: [
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/1-1-900x490.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/10-900x490.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/11/hero2-bg.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/6-1-900x490.jpg',
      ]
    },
    {
      id: 3,
      date: '16 Марта',
      active: false,
      title: 'Возвращение в Горепани и переход в Тадапани',
      description: 'В то время как ранние путешествия, как правило, были более медленными, более опасными и в них в большей степени преобладали торговля и миграция, культурный и технологический прогресс на протяжении многих лет, как правило, означал, что путешествия стали проще и доступнее. Этой тенденции способствовало развитие технологий в таких разнообразных областях, как конные перевозки и скоростные поезда.',
      image: 'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/10-900x490.jpg',
      images: [
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/6-1-900x490.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/11/hero2-bg.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/1-1-900x490.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/10-900x490.jpg'
      ]
    },
    {
      id: 4,
      date: '17 Марта',
      active: false,
      title: 'Тадапани — Чомронг',
      description: 'Дворец пятидесяти пяти окон. Этот великолепный дворец был построен во время правления короля Якшья Маллы в 1427 году нашей эры и впоследствии был реконструирован королем Бхупатиндрой Маллой в семнадцатом веке. Среди кирпичных стен с изящной обстановкой и скульптурным оформлением находится балкон с «Пятьдесят пятью окнами», считающийся уникальным шедевром резьбы по дереву.',
      image: 'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/6-1-900x490.jpg',
      images: [
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/1-1-900x490.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/10-900x490.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/11/hero2-bg.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/6-1-900x490.jpg',
      ]
    },
    {
      id: 5,
      date: '18 Марта',
      active: false,
      title: 'Город озер, приключений и спокойствия',
      description: 'В то время как ранние путешествия, как правило, были более медленными, более опасными и в них в большей степени преобладали торговля и миграция, культурный и технологический прогресс на протяжении многих лет, как правило, означал, что путешествия стали проще и доступнее. Этой тенденции способствовало развитие технологий в таких разнообразных областях, как конные перевозки и скоростные поезда.',
      image: 'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/3-1-900x490.jpg',
      images: [
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/6-1-900x490.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/11/hero2-bg.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/1-1-900x490.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/10-900x490.jpg'
      ]
    },
    {
      id: 6,
      date: '19 Марта',
      active: false,
      title: 'Поездка в Наяпул и поход в Уллери',
      description: 'Дворец пятидесяти пяти окон. Этот великолепный дворец был построен во время правления короля Якшья Маллы в 1427 году нашей эры и впоследствии был реконструирован королем Бхупатиндрой Маллой в семнадцатом веке. Среди кирпичных стен с изящной обстановкой и скульптурным оформлением находится балкон с «Пятьдесят пятью окнами», считающийся уникальным шедевром резьбы по дереву.',
      image: 'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/10-900x490.jpg',
      images: [
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/1-1-900x490.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/10-900x490.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/11/hero2-bg.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/6-1-900x490.jpg',
      ]
    },
    {
      id: 7,
      date: '20 Марта',
      active: false,
      title: 'Поход в Горепани',
      description: 'В то время как ранние путешествия, как правило, были более медленными, более опасными и в них в большей степени преобладали торговля и миграция, культурный и технологический прогресс на протяжении многих лет, как правило, означал, что путешествия стали проще и доступнее. Этой тенденции способствовало развитие технологий в таких разнообразных областях, как конные перевозки и скоростные поезда.',
      image: 'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/1-1-900x490.jpg',
      images: [
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/6-1-900x490.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/11/hero2-bg.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/1-1-900x490.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/10-900x490.jpg'
      ]
    },
    {
      id: 8,
      date: '21 Марта',
      active: false,
      title: 'Ранний переход на холм Пун',
      description: 'Дворец пятидесяти пяти окон. Этот великолепный дворец был построен во время правления короля Якшья Маллы в 1427 году нашей эры и впоследствии был реконструирован королем Бхупатиндрой Маллой в семнадцатом веке. Среди кирпичных стен с изящной обстановкой и скульптурным оформлением находится балкон с «Пятьдесят пятью окнами», считающийся уникальным шедевром резьбы по дереву.',
      image: 'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/9-1-900x490.jpg',
      images: [
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/1-1-900x490.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/10-900x490.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/11/hero2-bg.jpg',
        'https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/6-1-900x490.jpg',
      ]
    },
  ]

  day = this.days[1]

  constructor() { }

  ngOnInit() {
  }

  selectDay(index){
    this.days.map(d => d.active = false)
    this.days[index].active = true
    this.day = this.days[index]
  }

  openTripMenu(){
    this.appService.openTripMenu.next(true)
  }

}
