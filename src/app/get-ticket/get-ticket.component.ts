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
  private sub: any;
  pathImage: string;
  ticks = 0;
  minutes = 0;
  hour = 0;
  boolTicket = false;
  body: any;

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
      this.boolTicket = false;
    }else {
      this.boolTicket = true;
    }
  }

  startBooking(): void {
    switch (this.id) {
      case 1: {
          this.body = {
            '$class': 'org.example.biznet.StartBooking',
            'user': 'Elena',
            'mode': 'drivenow',
            'timestamp': '2017-11-25T10:54:29.858Z'
          };
          this.blockChainService.startBooking(this.body);
         break;
      }
      case 2: {
        this.body = {
          '$class': 'org.example.biznet.StartBooking',
          'user': 'Elena',
          'mode': 'drivenow',
          'timestamp': '2017-11-25T10:54:29.858Z',
        };
        this.blockChainService.startBooking(this.body);
       break;
    }
    case 3: {
      this.body = {
        '$class': 'org.example.biznet.StartBooking',
        'user': 'Elena',
        'mode': 'drivenow',
        'timestamp': '2017-11-25T10:54:29.858Z',
      };
      this.blockChainService.startBooking(this.body);
     break;
  }
  case 4: {
    this.body = {
      '$class': 'org.example.biznet.StartBooking',
      'user': 'Elena',
      'mode': 'drivenow',
      'timestamp': '2017-11-25T10:54:29.858Z',
    };
    this.blockChainService.startBooking(this.body);
   break;
}
case 5: {
  this.body = {
    '$class': 'org.example.biznet.StartBooking',
    'user': 'Elena',
    'mode': 'drivenow',
    'timestamp': '2017-11-25T10:54:29.858Z',
  };
  this.blockChainService.startBooking(this.body);
 break;
}
case 6: {
  this.body = {
    '$class': 'org.example.biznet.StartBooking',
    'user': 'Elena',
    'mode': 'drivenow',
    'timestamp': '2017-11-25T10:54:29.858Z',
  };
  this.blockChainService.startBooking(this.body);
 break;
}
      default: {
         break;
      }
   }
  }
}
