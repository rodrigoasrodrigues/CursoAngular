import { Component, OnInit } from '@angular/core';
import { IEvento } from '../interfaces/eventos.interface';
import { EventosService } from '../services/evento.service';
import { Config } from 'protractor';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private eventosService:EventosService) { 
    this.listar();
  }

  public eventoSelecionado: IEvento;

  public selecionar(item:IEvento): void {
    this.eventoSelecionado = item;
  }
  public clean(): void {
    this.eventoSelecionado = null;
  }

  private novoEvento: IEvento;
  public novo():void{
    this.novoEvento = {descricao:'',data:'',preco:0}
    this.eventoSelecionado = this.novoEvento;
  }
  public add():void{
    if(!this.listaEventos.includes(this.eventoSelecionado))
    this.incluir(this.eventoSelecionado);
    this.clean();
  }
  
  public incluir(evento:IEvento){
    this.eventosService.postEventoWS(evento)
        .subscribe(
          res => JSON.stringify(res),
          error => alert(error),
          () => this.listar()
        );
    
  }

  ngOnInit() {
  }

  public listar(){
    this.eventosService.getEventosWS()
        .subscribe( eventos => { this.listaEventos= eventos }) ;
  }

  public listaEventos: Config;

}
