import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {
  
  livros = [
    { titulo: 'Livro 1', diasRestantes: 5 },
    { titulo: 'Livro 2', diasRestantes: 2 },
    { titulo: 'Livro 3', diasRestantes: 10 },
  ];


  constructor() { }

  ngOnInit(): void {
    this.ordenarLivros();
  }

  isProximo(livro:any): boolean {
    return livro.diasRestantes <= 2;
  }

  private ordenarLivros(): void {
    this.livros.sort((a, b) => a.diasRestantes - b.diasRestantes);
  }
}
