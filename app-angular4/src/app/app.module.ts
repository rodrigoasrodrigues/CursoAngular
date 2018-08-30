import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//especificacao da rota deve vir antes dos componentes
import { appRoutes } from './rotas/app.routes'

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EventosService } from './services/evento.service';


@NgModule({
  declarations: [
    AppComponent, MenuComponent, HomeComponent, CadastroComponent, NotfoundComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [EventosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
