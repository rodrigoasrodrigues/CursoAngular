import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

//especificacao da rota deve vir antes dos componentes
import { appRoutes } from './rotas/app.routes'

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EventosService } from './services/evento.service';
import { SubLista } from './filters/sublista.filter';


@NgModule({
  declarations: [
    AppComponent, MenuComponent, HomeComponent, CadastroComponent, NotfoundComponent, SubLista
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule
  ],
  providers: [EventosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
