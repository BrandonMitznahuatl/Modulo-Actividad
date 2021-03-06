import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './components/table/table.component';
import { MatTableModule} from '@angular/material/table';
import { MatButtonModule} from '@angular/material/button';
import { MatTableExporterModule } from 'mat-table-exporter';
import { PruebaComponent } from './prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatTableExporterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
