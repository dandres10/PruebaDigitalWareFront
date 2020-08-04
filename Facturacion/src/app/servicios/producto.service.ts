import { Injectable } from '@angular/core';
import { ServiciosRest } from '../transversales/interfaces/serviciosRest/ServiciosRest';

import { HttpClient } from '@angular/common/http';

import { header } from '../transversales/servicioRest/configuracion/configuracion';
import { ProductoRutas } from '../transversales/servicioRest/nombresServiciosRest/producto/productoRutas';
import { ProductosCantidadMinimaPermitida } from '../modelos/producto/consultarProductosCantidadMinimaPermitida';
import { ConsultarListaProductosVendidoAno } from '../modelos/producto/consultarListaProductosVendidoAno';
import { Observable } from 'rxjs';
import { Respuesta } from '../modelos/Respuesta/Respuesta';


@Injectable({
  providedIn: 'root'
})
export class ProductoService implements ServiciosRest {

  constructor(private http: HttpClient, public _productoRutas: ProductoRutas) { }

  Guardar<Producto>(modelo: Producto): Observable<Respuesta<Producto>> {
    return this.http.post<Respuesta<Producto>>(this._productoRutas.GuardarProducto, JSON.stringify(modelo), { headers: header });
  }
  Editar<Producto>(modelo: Producto): Observable<Respuesta<Producto>> {
    return this.http.put<Respuesta<Producto>>(this._productoRutas.EditarProducto, JSON.stringify(modelo), { headers: header });
  }
  ConsultarLista<Producto>(): Observable<Respuesta<Producto>> {
    return this.http.get<Respuesta<Producto>>(this._productoRutas.ConsultarListaProducto, { headers: header });
  }
  Eliminar<Producto>(modelo: Producto): Observable<Respuesta<Producto>> {
    return this.http.post<Respuesta<Producto>>(this._productoRutas.EliminarProducto, JSON.stringify(modelo), { headers: header });
  }
  Consultar<Producto>(modelo: Producto): Observable<Respuesta<Producto>> {
    return this.http.post<Respuesta<Producto>>(this._productoRutas.ConsultarProducto, { headers: header });
  }

  ConsultarProductosCantidadMinimaPermitida<RespuestaCantidadMinimaPermitida>(modelo: ProductosCantidadMinimaPermitida): Observable<Respuesta<RespuestaCantidadMinimaPermitida>> {
    return this.http.post<Respuesta<RespuestaCantidadMinimaPermitida>>(this._productoRutas.ConsultarProductosCantidadMinimaPermitida, JSON.stringify(modelo), { headers: header });
  }

  ConsultarListaProductosVendidoAno<RespuestaConsultarListaProductosVendidoAno>(modelo: ConsultarListaProductosVendidoAno): Observable<Respuesta<RespuestaConsultarListaProductosVendidoAno>> {
    return this.http.post<Respuesta<RespuestaConsultarListaProductosVendidoAno>>(this._productoRutas.ConsultarListaProductosVendidoAno, JSON.stringify(modelo), { headers: header });
  }

}
