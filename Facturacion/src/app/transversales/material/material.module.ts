import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import material
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTableModule
  ],
  exports:[
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTableModule  
  ]
})
export class MaterialModule { }
