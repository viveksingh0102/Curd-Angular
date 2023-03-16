import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {HttpClientModule} from '@angular/common/http';
// import { ProductListComponent } from './employee-list/product-list.component';
import { EditFormComponent } from './edit-form/edit-form.component'
import { DataTablesModule } from 'angular-datatables';
import{EmployeeListComponent} from './employee-list/employee-list.component'
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    EditFormComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
