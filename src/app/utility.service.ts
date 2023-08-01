import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  generateId() {
    return Math.floor(Math.random() * 5)
  }
}
