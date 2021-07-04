import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'questassignment';
  workers = [];
  selectedID;
  flights = [];
  selectedFlight = null;

  constructor(private myservice: MyserviceService, private http: HttpClient) { }

  ngOnInit() {
    this.displayWorkers();
    setInterval(() => {
      this.displayFlights()
    }, 60000)
  }

  // Function that get Workers

  getWorkers() {
    return this.http.get(this.myservice.workersUrl);
  }

  // Function that creates workers Array and displays them

  displayWorkers() {
    this.getWorkers().subscribe((data: any) => {  
      this.selectedID = data[0].id; // setting the first worker as a default one
      this.workers = data;
      this.displayFlights();
    });
  }

  // Function that gets flights of the selected worker
  getFlights() {
    return this.http.get(this.myservice.workersUrl + this.selectedID);
  }

  // Function that displays default flights
  displayFlights() {
    this.getFlights().subscribe((data: any) => {
      this.flights = data;
    })
  }

  changeSelectedWorker(workerID) {
    this.selectedID = workerID;
    this.displayFlights();
    this.selectedFlight = null; // reseting flight information on every worker change
  }

}
