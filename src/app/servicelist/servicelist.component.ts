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
  { id: 1, name: 'MVG', description: 'Münchner Verkehrsgesellschaft für den städtischen U-Bahn-, Tram- und Stadtbusverkehr in München.', imagePath: './assets/images/1.png' },
  { id: 2, name: 'Car2Go', description: 'Car2Go ist ein Carsharing-Anbieter des deutschen Automobilherstellers Daimler sowie des Mietwagenunternehmens Europcar.', imagePath: './assets/images/2.png' },
  // tslint:disable-next-line:max-line-length
  { id: 3, name: 'Deutsche Bahn', description: ' Das Deutsche Bahn-Netz betreibt die Eisenbahninfrastruktur und damit das größte Schienennetz Europas.', imagePath: './assets/images/3.png' },
  { id: 4, name: 'DB-Flinkster', description: 'Flinkster ist das Carsharing-Angebot der Deutschen Bahn mit rund 3100 Fahrzeugen.', imagePath: './assets/images/4.png' },
  // tslint:disable-next-line:max-line-length
  { id: 5, name: 'Drive Now', description: 'DriveNow ist ein Carsharing-Angebot des Automobilherstellers BMW sowie des Mietwagenunternehmens Sixt. ', imagePath: './assets/images/5.png' },
  { id: 6, name: 'MVG-Rad', description: 'In dieser Version des Systems werden die Fahrräder an ortsfesten Selbstbedienungsterminals in der ganzen Stadt aufbewahrt bzw. zum Abstellen eingeklinkt.', imagePath: './assets/images/6.png' },

];




