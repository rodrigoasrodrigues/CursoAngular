import { Component, OnInit } from '@angular/core';
import { IEvento } from '../interfaces/eventos.interface';
import { EventosService } from '../services/evento.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(eventosService:EventosService) { 
    this.listaEventos= eventosService.getEventos();
  }

  ngOnInit() {
  }

  public listaEventos: IEvento[];

}
