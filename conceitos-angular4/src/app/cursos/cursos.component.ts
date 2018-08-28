import { Component } from '@angular/core'
import { CursosService } from './cursos.service';

@Component({
    selector: 'cursos-lista',
    templateUrl:   './cursos.component.html'
})
export class CursosComponent{
    listaCursos: string[];

    constructor(cursosService: CursosService){
        this.listaCursos = cursosService.getCursos();
    }
}