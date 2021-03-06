import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { TelaPadraoComponent } from './tela-padrao/tela-padrao.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [TelaPadraoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ContainerRoutingModule,
    LayoutModule,
    RouterModule,
    SharedModule
  ]
})
export class ContainerModule { }
