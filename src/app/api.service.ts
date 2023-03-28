import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseurl = 'https://poke'
  constructor() { }
}
