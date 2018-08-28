import { Component } from '@angular/core'
import { EscolasService } from './escolas.service';

@Component({
    selector: 'escolas-lista',
    templateUrl:   './escolas.component.html'
})
export class EscolasComponent{
    listaEscolas: string[];

    constructor(escolasService: EscolasService){
        this.listaEscolas = escolasService.getEscolas();
    }
}