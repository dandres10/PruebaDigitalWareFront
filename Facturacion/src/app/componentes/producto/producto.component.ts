import { Component } from '@angular/core';
import { ProductoService } from '../../servicios/producto.service';
import { Producto } from '../../modelos/producto/producto';
import { Respuesta } from '../../modelos/Respuesta/Respuesta';
import { ProductosCantidadMinimaPermitida } from '../../modelos/producto/consultarProductosCantidadMinimaPermitida';
import { RespuestaCantidadMinimaPermitida } from '../../modelos/producto/respuestaCantidadMinimaPermitida';
import { RespuestaConsultarListaProductosVendidoAno } from '../../modelos/producto/respuestaConsultaListaProductosVendidoAno';
import { ConsultarListaProductosVendidoAno } from '../../modelos/producto/consultarListaProductosVendidoAno';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {


  constructor(private _productoService: ProductoService,private fb: FormBuilder, private router: Router) {

    this.ConsultarListaProductos();

    setTimeout(()=>{
    console.log(this.listaProductos);
    },3000);

   }

  //Metodos
  GuardarProducto(producto: Producto) {
    this._productoService.Guardar<Producto>(producto)
      .subscribe((respuesta: Respuesta<Producto>) =>
        this.respuestaGuardarProducto = respuesta);
  }

  EditarProducto(producto: Producto) {
    this._productoService.Editar<Producto>(producto)
      .subscribe((respuesta: Respuesta<Producto>) =>
        this.respuestaEditarProducto = respuesta);
  }

  ConsultarListaProductos() {
    this._productoService.ConsultarLista<Producto>()
      .subscribe((respuesta: Respuesta<Producto>) =>
        this.listaProductos = respuesta.entidades);
  }

  EliminarProducto(producto: Producto) {
    this._productoService.Eliminar<Producto>(producto)
      .subscribe((respuesta: Respuesta<Producto>) =>
        this.respuestaProductoEliminar = respuesta);
  }

  ConsultarProducto(producto: Producto) {
    this._productoService.Consultar<Producto>(producto)
      .subscribe((respuesta: Respuesta<Producto>) =>
        this.respuestaConsultarProducto = respuesta);
  }

  ConsultarProductosCantidadMinimaPermitida(cantidadMinima: ProductosCantidadMinimaPermitida) {
    this._productoService.ConsultarProductosCantidadMinimaPermitida<RespuestaCantidadMinimaPermitida>(cantidadMinima)
      .subscribe((respuesta: Respuesta<RespuestaCantidadMinimaPermitida>) =>
        this.respuestaCantidadMinimaPermitida = respuesta.entidades);
  }

  ConsultarListaProductosVendidoAno(productosCantidadMinimaPermitidaAno: ConsultarListaProductosVendidoAno) {
    this._productoService.ConsultarListaProductosVendidoAno<RespuestaConsultarListaProductosVendidoAno>(productosCantidadMinimaPermitidaAno)
      .subscribe((repuesta: Respuesta<RespuestaConsultarListaProductosVendidoAno>) =>
        this.respuestaConsultarListaProductosVendidoAno = repuesta.entidades);
  }



  //Fin metodos


  //Variables
  respuestaGuardarProducto: Respuesta<Producto>;
  respuestaEditarProducto: Respuesta<Producto>;
  listaProductos: Producto[] = [];
  respuestaProductoEliminar: Respuesta<Producto>;
  respuestaConsultarProducto: Respuesta<Producto>;
  respuestaCantidadMinimaPermitida: RespuestaCantidadMinimaPermitida[] = [];
  respuestaConsultarListaProductosVendidoAno: RespuestaConsultarListaProductosVendidoAno[] = [];
  //Fin variables

  //variables Visuales
  formularioProducto: FormGroup;
  //Fin variables visuales


}
