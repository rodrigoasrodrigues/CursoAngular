import { Injectable } from '@angular/core'

@Injectable()
export class EscolasService{
    getEscolas(){
        return ['Udemy','Coursera','Udacity','Alura'];
    }
}