import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {

  @Input()
  tituloBotao:string = "";

  @Input()
  headerTabela:string[] = [];

  @Input() 
  dados:any[] = [];

  @Input()
  mostrarImagem:boolean = false;

  @Input()
  buttonArray:any[] = [];

  @Output() abrirModalEvent = new EventEmitter<void>();

  abrirModal() {
    this.abrirModalEvent.emit();
  }
}
