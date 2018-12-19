import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule, Sort } from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { AddTaskComponentDialog } from './add-task/add-task.component';
import { EditTaskComponentDialog } from './edit-task/edit-task.component'

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    AddTaskComponentDialog,
    EditTaskComponentDialog,
  ],
  imports: [
    MatSortModule,
    MatFormFieldModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatPaginatorModule,
    // AppRoutingModule
    
  ],

  entryComponents: [TaskComponent,AddTaskComponentDialog, EditTaskComponentDialog],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
