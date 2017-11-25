import { HttpClient } from '@angular/common/http';
import { timeInterval } from 'rxjs/operator/timeInterval';
import { Component, OnDestroy, OnInit, Provider } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {SimpleTimer} from 'ng2-simple-timer';
import {BlockchainService} from '../shared/blockchain.service';

@Component({
  selector: 'app-get-ticket',
  templateUrl: './get-ticket.component.html',
  styleUrls: ['./get-ticket.component.css'],
  providers: [ BlockchainService ]
})
export class GetTicketComponent implements OnInit, OnDestroy {

  id: number;
  journeyID: string;
  private sub: any;
  pathImage: string;
  ticks = 0;
  minutes = 0;
  hour = 0;
  boolTicket = false;
  body: any;
  foobar: any;

  counter = 0;
  timerId: string;

  constructor(  private route: ActivatedRoute,
                private st: SimpleTimer,
                private blockChainService: BlockchainService ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      const temp = './assets/images/' + this.id + '.png';
      this.pathImage = temp;
   });
   // this.startTimer();
   this.st.newTimer('1sec', 1);
   this.timerId = this.st.subscribe('1sec', () => this.startTimer());
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  startTimer(): void {
    this.counter++;
    if (this.counter === 60) {
      this.counter = 0;
      this.minutes++;
    }else if (this.minutes === 60) {
      this.hour++;
    }
  }

  getYourTicket(): void {
    this.counter = 0;
    this.hour = 0;
    this.minutes = 0;
    if (this.boolTicket === true) {
      this.endJourney();
      this.boolTicket = false;
    }else {
      this.startBooking();
      this.boolTicket = true;
    }
  }

  startTrans(body: any): void {
    this.blockChainService.startBooking(this.body).subscribe(
      data => {
        this.blockChainService.getJourneyID(data.transactionId).subscribe(
          data => {
            this.journeyID = this.getJourneyID(data.eventsEmitted[0].journey);
            this.foobar = {
              '$class': 'org.example.biznet.EndBooking',
              'journey': this.journeyID,
              'timestamp': '2017-11-25T12:33:38.593Z'
            }
            console.log("Start of booking",data);
          }
        );
      }
    );
  }

  endJourney(): void {
    this.blockChainService.endJourney(this.foobar).subscribe(
      data => {
        console.log("End of booking:",data);
      }
    );
  }

  getJourneyID(jsonObj): any {
    // tslint:disable-next-line:prefer-const
    let stringOb = JSON.stringify(jsonObj);
    // tslint:disable-next-line:prefer-const
    let start = stringOb.indexOf('JOURNEY');
    // tslint:disable-next-line:prefer-const
    let end = stringOb.indexOf('"', start);
    const journey = stringOb.slice(start, end);
    return journey;
  }

  startBooking(): void {
    switch (this.id) {
      case 1: {
          this.body = {
            '$class': 'org.example.biznet.StartBooking',
            'user': 'Elena',
            'mode': 'mvg',
            'timestamp': '2017-11-25T10:54:29.858Z'
          };
          this.startTrans(this.body);
         break;
      }
      case 2: {
        this.body = {
          '$class': 'org.example.biznet.StartBooking',
          'user': 'Elena',
          'mode': 'car2go',
          'timestamp': '2017-11-25T10:54:29.858Z',
        };
        this.startTrans(this.body);
       break;
    }
    case 3: {
      this.body = {
        '$class': 'org.example.biznet.StartBooking',
        'user': 'Elena',
        'mode': 'db',
        'timestamp': '2017-11-25T10:54:29.858Z',
      };
      this.startTrans(this.body);
     break;
  }
  case 4: {
    this.body = {
      '$class': 'org.example.biznet.StartBooking',
      'user': 'Elena',
      'mode': 'flinkster',
      'timestamp': '2017-11-25T10:54:29.858Z',
    };
    this.startTrans(this.body);
   break;
}
case 5: {
  this.body = {
    '$class': 'org.example.biznet.StartBooking',
    'user': 'Elena',
    'mode': 'drivenow',
    'timestamp': '2017-11-25T10:54:29.858Z',
  };
  this.startTrans(this.body);
 break;
}
case 6: {
  this.body = {
    '$class': 'org.example.biznet.StartBooking',
    'user': 'Elena',
    'mode': 'mvgrad',
    'timestamp': '2017-11-25T10:54:29.858Z',
  };
  this.startTrans(this.body);
 break;
}
      default: {
         break;
      }
   }
  }
}
