import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OuvrageListComponent } from './ouvrage-list/ouvrage-list.component';
import { OuvrageDetailComponent } from './ouvrage-detail/ouvrage-detail.component';
import { OuvrageConsultationComponent } from './ouvrage-consultation/ouvrage-consultation.component';
import { EditeurListComponent } from './editeur-list/editeur-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OuvrageListComponent,
    OuvrageDetailComponent,
    OuvrageConsultationComponent,
    EditeurListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
