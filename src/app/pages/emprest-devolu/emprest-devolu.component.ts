import { Component } from '@angular/core';

@Component({
  selector: 'app-emprest-devolu',
  templateUrl: './emprest-devolu.component.html',
  styleUrls: ['./emprest-devolu.component.css']
})
export class EmprestDevoluComponent {
  jsonData = [
    {
      "id": "01",
      "imagemUrl": "https://m.media-amazon.com/images/I/41zvW5OkqVL._SY445_SX342_.jpg",
      "nome": "Juliana Passos",
      "dtEmprestimo": "26/10/2023",
      "dtPrevista": "05/11/2023",
      "status": "Em andamento"
    },
  ];

  botoes = [
    { icon: 'fa-solid fa-pen-to-square', label: 'Editar' },
    { icon: 'fa-solid fa-trash', label: 'Excluir' },
    { icon: 'fa-solid fa-rotate-left', label: 'Devolver'},
  ]

  modalAberto: boolean = false;

  abrirModal() {
    this.modalAberto = true;
  }
 
  fecharModal(){
    this.modalAberto = false;
  }

}
