import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaPadraoComponent } from './tela-padrao/tela-padrao.component';


const routes: Routes = [
  {path: 'container', component: TelaPadraoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
