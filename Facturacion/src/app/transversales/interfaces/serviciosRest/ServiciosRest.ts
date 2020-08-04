import { Observable } from 'rxjs';
import { Respuesta } from '../../../modelos/Respuesta/Respuesta';

export interface ServiciosRest {

     Guardar<T>(modelo: T): Observable<Respuesta<T>>;
     Editar<T>(modelo: T): Observable<Respuesta<T>>;
     ConsultarLista<T>(): Observable<Respuesta<T>>;
     Eliminar<T>(modelo: T): Observable<Respuesta<T>>;
     Consultar<T>(modelo: T): Observable<Respuesta<T>>;
}