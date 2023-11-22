import { Component } from '@angular/core';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent {

  jsonData = [
    {
      "id": "1123",
      "imagemUrl": "https://m.media-amazon.com/images/I/41zvW5OkqVL._SY445_SX342_.jpg",
      "nome": "Broken Souls",
      "isbn": " B0BXHD3JKG"
    },
    {
      "id": "1234",
      "imagemUrl": "https://m.media-amazon.com/images/I/51DDyKnPXQL._SY445_SX342_.jpg",
      "nome": "A lista",
      "isbn": "B0CBT1PBDM"
    }
  ];

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
