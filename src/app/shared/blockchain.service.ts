import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BlockchainService {
  private startBookingUrl = 'http://localhost:3000/api/StartBooking';
  private journeyIDUrl = 'http://localhost:3000/api/system/historian/';
  private endJourneyUrl = 'http://localhost:3000/api/EndBooking';

  // tslint:disable-next-line:prefer-const
   trans = {
    '$class': 'org.example.biznet.StartBooking',
    'user': 'Elena',
    'mode': 'drivenow',
    'timestamp': '2017-11-25T10:54:29.858Z'
  };


  constructor(private httpClient: HttpClient) { }


  startBooking(body: any): Observable <any> {
    return this.httpClient.post(this.startBookingUrl, body);
  }


  getJourneyID(transactionID: any): Observable <any> {
    return this.httpClient.get(this.journeyIDUrl + transactionID);
  }

  endJourney(body: any): Observable <any> {
    return this.httpClient.post(this.endJourneyUrl, body);

  }

}


