import { Injectable } from '@angular/core'

@Injectable()
export class CursosService{
    getCursos(){
        return ['Java','.Net','Angular','Culinária'];
    }
}