import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servicelist',
  templateUrl: './servicelist.component.html',
  styleUrls: ['./servicelist.component.css']
})
export class ServicelistComponent implements OnInit {
  myServices: Services [ ];
  constructor() { }

  ngOnInit() {
    this.myServices = SERVICE;
  }

}

export class Services {
  id: number;
  name: string;
  description: string;
  imagePath: string;
}

export const SERVICE: Services[] = [
  // tslint:disable-next-line:max-line-length
  { id: 1, name: 'MVG', description: '', imagePath: './assets/images/1.png' },
  { id: 2, name: 'Car2Go', description: '', imagePath: './assets/images/2.png' },
  // tslint:disable-next-line:max-line-length
  { id: 3, name: 'Deutsche Bahn', description: '', imagePath: './assets/images/3.png' },
  { id: 4, name: 'DB-Flinkster', description: '', imagePath: './assets/images/4.png' },
  // tslint:disable-next-line:max-line-length
  { id: 5, name: 'Drive Now', description: '', imagePath: './assets/images/5.png' },
  { id: 6, name: 'MVG-Rad', description: '', imagePath: './assets/images/6.png' },

];




