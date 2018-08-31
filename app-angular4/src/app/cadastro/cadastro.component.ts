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

  constructor(eventosService:EventosService) { 
    
    eventosService.getEventosWS().subscribe( eventos => {
      this.listaEventos= eventos }) ;
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
  public save():void{
    this.listaEventos.push(this.eventoSelecionado);
    this.clean();
  }

  ngOnInit() {
  }

  public listaEventos: Config;

}
