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
import { DialogComponent } from '../../transversales/dialog/dialog.component';





@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {


  constructor(private _productoService: ProductoService,
    private fb: FormBuilder,
    private router: Router,
    private dialogComponent: DialogComponent) {

    this.ConsultarListaProductos();
    this.crearFormulario();
    this.cargarFormulario();

   

    setTimeout(() => {
      console.log(this.listaProductos);
      this.ELEMENTOS_TABLA = this.listaProductos;
    }, 2000);

  }

  //Metodos
  //ServiciosRest
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
  //Fin serviciosRest


  //Logica 
  guardar() {
    if (this.formularioProducto.valid) {
      this.GuardarProducto(this.cargarObjetoProducto());
      this.limpiarFormulario();
    }
  }


  abrirModal() {
    if (this.respuestaGuardarProducto != undefined || this.respuestaGuardarProducto != null) {
      this.respuestaTransversal = this.respuestaGuardarProducto;
      this.dialogComponent.openDialog(this.respuestaTransversal);
      console.log(this.respuestaTransversal);

    }
  }



  cargarObjetoProducto(): Producto {
    return this.producto = {
      nombre: this.formularioProducto.get('nombre').value,
      precio: this.formularioProducto.get('precio').value
    }
  }



  //Fin Logica 

  //Formularios
  crearFormulario() {
    this.formularioProducto = this.fb.group({
      nombre: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      cantidad: ['', [Validators.required]]
    });
  }

  limpiarFormulario() {
    this.formularioProducto.reset({
      nombre: '',
      precio: '',
      cantidad: ''
    });


  }

  cargarFormulario() {
    this.formularioProducto.reset({
      nombre: 'Piña',
      precio: '2000',
      cantidad: '45'
    });


  }
  //Fin formularios


  //Validaciones
  get nombreNoValido() {
    return this.formularioProducto.get('nombre').invalid &&
      this.formularioProducto.get('nombre').touched;
  }

  get precioNoValido() {
    return this.formularioProducto.get('precio').invalid &&
      this.formularioProducto.get('precio').touched;
  }

  get cantidadNoValido() {
    return this.formularioProducto.get('cantidad').invalid &&
      this.formularioProducto.get('cantidad').touched;
  }
  //Fin validaciones

  //Fin metodos


  //Variables
  respuestaGuardarProducto: Respuesta<Producto>;
  respuestaEditarProducto: Respuesta<Producto>;
  listaProductos: Producto[] = [];
  respuestaProductoEliminar: Respuesta<Producto>;
  respuestaConsultarProducto: Respuesta<Producto>;
  respuestaCantidadMinimaPermitida: RespuestaCantidadMinimaPermitida[] = [];
  respuestaConsultarListaProductosVendidoAno: RespuestaConsultarListaProductosVendidoAno[] = [];
  producto: Producto;
  respuestaTransversal: Respuesta<Producto>;
  ELEMENTOS_TABLA: Producto[] = [];
  
  displayedColumns: string[] = ['codigo', 'nombre', 'precio'];
  //Fin variables

  //variables Visuales
  formularioProducto: FormGroup;
  //Fin variables visuales


}
