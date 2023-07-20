import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor() { }

  #getPrograms() {
    return [
      {
        label: '門診醫囑',
        icon: 'pi pi-user-plus',
        routerLink: '/home/patient',
        version: 'V 1.1.2'
      },
      {
        label: '心髒移植表單',
        icon: 'pi pi-heart-fill',
        command: () => {
          console.log('heartFill');
        },
        version: 'V 1.7.2'
      },
      {
        label: '電子病歷查詢',
        icon: 'pi pi-book',
        routerLink: '',
        version: 'V 1.5.5'
      }
    ]
  }

  getPrograms() {
    return Promise.resolve(this.#getPrograms());
  }

  getFavPrograms() {
    return Promise.resolve(this.#getPrograms().slice(0,2));
  }
}
