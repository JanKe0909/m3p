import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatButtonModule, MatIconRegistry, MatTabsModule} from '@angular/material';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ServicelistComponent } from './servicelist/servicelist.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GetTicketComponent } from './get-ticket/get-ticket.component';
import { SimpleTimer } from 'ng2-simple-timer';
import {MatFormFieldModule} from '@angular/material/form-field';


import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ServicelistComponent,
    GetTicketComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
    MatTabsModule
  ],
  providers: [SimpleTimer, MatIconRegistry, HttpClientModule],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
