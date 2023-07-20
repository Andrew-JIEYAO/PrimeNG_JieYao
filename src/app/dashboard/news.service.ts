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
        date: '2023-07-05 11:11'
      },
      {
        id: 2,
        href: 'https://www.primefaces.org/primeng-v14-lts/setup',
        title: '你目前有１４張簽合表單需審核',
        date: '2023-07-01 11:15'
      },
      {
        id: 3,
        href: 'https://www.primefaces.org/primeng-v14-lts/setup',
        title: '你目前有６張簽合表單需審核',
        date: '2023-06-30 10:11'
      },
      {
        id: 4,
        href: 'https://www.primefaces.org/primeng-v14-lts/setup',
        title: '你有衛材申請待審核',
        date: '2023-06-25 09:51'
      }
    ]
  }

  getNewses() {
    return Promise.resolve(this.#getNews());
  }
}
