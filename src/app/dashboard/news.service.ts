import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  #getNews() {
    return [
      {
        id: 1,
        href: 'https://www.primefaces.org/primeng-v14-lts/setup',
        title: '你目前有２２張簽合表單需審核',
        date: '2023-07-05 11:11',
        isDone: true
      },
      {
        id: 2,
        href: 'https://www.primefaces.org/primeng-v14-lts/setup',
        title: '你目前有１４張簽合表單需審核',
        date: '2023-07-01 11:15',
        isDone: true
      },
      {
        id: 3,
        href: 'https://www.primefaces.org/primeng-v14-lts/setup',
        title: '你目前有６張簽合表單需審核',
        date: '2023-06-30 10:11',
        isDone: false
      },
      {
        id: 4,
        href: 'https://www.primefaces.org/primeng-v14-lts/setup',
        title: '你有衛材申請待審核',
        date: '2023-06-25 09:51',
        isDone: true
      },
      {
        id: 5,
        href: 'https://www.primefaces.org/primeng-v14-lts/setup',
        title: '你有衛材申請待審核',
        date: '2023-06-21 09:04',
        isDone: false
      },
      {
        id: 6,
        href: 'https://www.primefaces.org/primeng-v14-lts/setup',
        title: '你目前有7張簽合表單需審核',
        date: '2023-06-01 11:49',
        isDone: true
      },
      {
        id: 7,
        href: 'https://www.primefaces.org/primeng-v14-lts/setup',
        title: '你目前有10張簽合表單需審核',
        date: '2023-05-01 14:49',
        isDone: false
      }

    ]
  }

  getNewses() {
    return Promise.resolve(this.#getNews());
  }
}
