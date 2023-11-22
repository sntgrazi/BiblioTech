import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent {

  jsonData = [
    {
      "id": "1",
      "nome": "João Silva",
      "cpf": "123.456.789-00",
      "telefone": "(123) 456-7890"
    },
    {
      "id": "2",
      "nome": "Maria Souza",
      "cpf": "987.654.321-00",
      "telefone": "(987) 654-3210"
    },
  ]

  botoes = [
    { icon: 'fa-solid fa-pen-to-square', label: 'Editar' },
    { icon: 'fa-solid fa-trash', label: 'Excluir' }
  ]

  modalAberto: boolean = false;

  abrirModal() {
    this.modalAberto = true;
  }
 
  fecharModal(){
    this.modalAberto = false;
  }

}
