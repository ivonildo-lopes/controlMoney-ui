import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertConfirmService } from '../../shared/alert-confirm/alert-confirm.service';
import { NotificationService, MessageType } from '../../shared/notification/notification.service';

import { CPF } from '@mask';

@Component({
  selector: 'app-tela-padrao',
  templateUrl: './tela-padrao.component.html',
  styleUrls: ['./tela-padrao.component.css']
})
export class TelaPadraoComponent implements OnInit, OnDestroy {

  maskCPF = CPF;

  constructor(private notification: NotificationService) { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition skin-blue sidebar-mini';
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }


  // testando toast
  // teste(){
  //    this.notification.info('teste','Titulo Mensagem');
  // }


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
