import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './transversales/material/material.module';

//Agregadas
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductoComponent } from './componentes/producto/producto.component';
import { MenuComponent } from './componentes/menu/menu.component';

import {ProductoRutas} from './transversales/servicioRest/nombresServiciosRest/producto/productoRutas';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductoRutas],
  bootstrap: [AppComponent]
})
export class AppModule { }
