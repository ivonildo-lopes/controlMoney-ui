import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertConfirmService } from 'src/app/shared/alert-confirm/alert-confirm.service';

@Component({
  selector: 'app-tela-padrao',
  templateUrl: './tela-padrao.component.html',
  styleUrls: ['./tela-padrao.component.css']
})
export class TelaPadraoComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition skin-blue sidebar-mini';
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }


  // TESTANDO OS ALERTAS
  // confirm(key: string) {

  //   const apertouOk = result => {
  //     if (result.value) {
  //       alert('teste')
  //     }
  //   };

  //   AlertConfirmService.showComfirm(`Tem certeza que deseja deletar?:`, 'warning', apertouOk);
  // }

  // info(key: string) {

  //   const apertouOk = result => {
  //     if (result.value) {
  //       alert('teste')
  //     }
  //   };

  //   AlertConfirmService.showInfo(`Tem certeza que deseja deletar?:`, 'info', apertouOk);
  // }

  // sucesso(key){
  //   const apertouOk = result => {
  //     if (result.value) {
  //       alert('teste')
  //     }
  //   };

  //   AlertConfirmService.showSucess('teste');
  // }

}
