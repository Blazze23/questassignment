import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  workersUrl = "https://interview-mock.herokuapp.com/api/workers/";
  constructor() { }
}
