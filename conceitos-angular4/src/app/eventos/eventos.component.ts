import { Component } from "@angular/core";

@Component({
    selector: 'eventos-binding',
    templateUrl: 'eventos.component.html'
})
export class EventosComponent{
    conteudoAtual: string;
    conteudoArmazenado: string;
    isMouseOver:boolean = false;

    onKeyUp(event){
        this.conteudoAtual = event.srcElement.value;
    }

    save(valor:string){
        this.conteudoArmazenado = valor;
    }

    onClick(){
        alert('Execução de evento - binding unidirecional');
    }

    onMouseSpan(){
        this.isMouseOver = !this.isMouseOver;
    }

}