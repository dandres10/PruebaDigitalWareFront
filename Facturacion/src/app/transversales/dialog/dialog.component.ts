import { Component  } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Respuesta } from '../../modelos/Respuesta/Respuesta';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent   {

  constructor(public dialog: MatDialog) { }

  respuesta: string;
  

  openDialog(respuesta: Respuesta<any>) {
    this.respuesta = respuesta.mensajes[0];
    console.log(this.respuesta);
    this.dialog.open(DialogComponent);
  }

}
