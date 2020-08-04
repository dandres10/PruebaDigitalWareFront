import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import material
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  exports:[
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
