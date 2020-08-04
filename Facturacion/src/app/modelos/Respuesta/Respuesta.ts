import { TipoNotificacion } from './TipoNotificacion';
export interface Respuesta<T> {

    resultado: boolean;
    entidades: T[];
    mensajes: string[];
    tipoNotificacion: TipoNotificacion;

};