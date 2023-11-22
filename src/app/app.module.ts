import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LivrosComponent } from './pages/livros/livros.component';
import { PessoasComponent } from './pages/pessoas/pessoas.component';
import { EmprestDevoluComponent } from './pages/emprest-devolu/emprest-devolu.component';
import { HistoricoComponent } from './pages/historico/historico.component';
import { LivrosDestaqueComponent } from './components/livros-destaque/livros-destaque.component';
import { LinksComponent } from './components/links/links.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { ModalComponent } from './components/modal/modal.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CardComponent,
    InicioComponent,
    LivrosComponent,
    PessoasComponent,
    EmprestDevoluComponent,
    HistoricoComponent,
    LivrosDestaqueComponent,
    LinksComponent,
    TabelaComponent,
    ModalComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
