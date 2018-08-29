import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CursosComponent } from './cursos/cursos.component';
import { EscolasComponent  } from './escolas/escolas.component';
import { BindingComponent } from './bindings/binding.component'


import {CursosService} from './cursos/cursos.service';
import {EscolasService} from './escolas/escolas.service';
import { EventosComponent } from './eventos/eventos.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent, CursosComponent, EscolasComponent, BindingComponent, EventosComponent, LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CursosService, EscolasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
