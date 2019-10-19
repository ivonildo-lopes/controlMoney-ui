import { Component, OnInit, OnDestroy } from '@angular/core';

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

}
