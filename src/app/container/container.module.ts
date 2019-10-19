import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { TelaPadraoComponent } from './tela-padrao/tela-padrao.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [TelaPadraoComponent],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    LayoutModule,
    RouterModule
  ]
})
export class ContainerModule { }
