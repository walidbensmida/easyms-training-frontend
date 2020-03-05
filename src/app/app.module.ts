import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ClientListComponent } from './client-list/client-list.component';
import { ClientService } from './service/client.service';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientEditFormComponent } from './client-edit-form/client-edit-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientFormComponent,
    ClientEditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
