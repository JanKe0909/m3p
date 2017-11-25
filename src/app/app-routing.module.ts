import { ServicelistComponent } from './servicelist/servicelist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GetTicketComponent } from './get-ticket/get-ticket.component';
import {HomeComponent} from './home/home.component'

const routes: Routes = [
  { path: 'servicelist', component: ServicelistComponent },
  { path: 'servicelist/getticket/:id', component: GetTicketComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


