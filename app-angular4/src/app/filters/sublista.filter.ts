import { IEvento } from '../interfaces/eventos.interface'
import { Pipe, PipeTransform } from '@angular/core'
import { Config } from 'protractor';

@Pipe({
    name: 'sublista'
})
export class SubLista implements PipeTransform{
    transform(eventos: Config, input: string): Config {
        if (eventos == null) return null
        return eventos.filter(p => p.descricao.toLowerCase().includes(input.toLowerCase()));
    }
}
