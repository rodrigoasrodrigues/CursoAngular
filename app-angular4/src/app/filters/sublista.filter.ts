import { IEvento } from '../interfaces/eventos.interface'
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'sublista'
})
export class SubLista implements PipeTransform{
    transform(eventos: IEvento[], input: string): IEvento[] {
        return eventos.filter(p => p.descricao.toLowerCase().includes(input.toLowerCase()));
    }
}