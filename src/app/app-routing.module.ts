import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LivrosComponent } from './pages/livros/livros.component';
import { PessoasComponent } from './pages/pessoas/pessoas.component';
import { EmprestDevoluComponent } from './pages/emprest-devolu/emprest-devolu.component';
import { HistoricoComponent } from './pages/historico/historico.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'livros', component: LivrosComponent},
  {path:'pessoas', component: PessoasComponent},
  {path:'emprestimo_e_devolucao', component: EmprestDevoluComponent},
  {path:'historico', component: HistoricoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
