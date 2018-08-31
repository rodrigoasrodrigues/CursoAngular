import { IEvento } from "../interfaces/eventos.interface"
import { Injectable } from "@angular/core";

@Injectable()
export class EventosService {
    public getEventos(): IEvento[] {
        return [
            { descricao: 'Avaliacao Angular', data: '30/08/2018', preco: 0 },
            { descricao: 'Palestra', data: '06/09/2018', preco: 150 },
            { descricao: 'Congresso de TI', data: '16/01/2019', preco: 400 },
            { descricao: 'Curso de Front End', data: '29/08/2019', preco: 400 }
        ];

    }
}