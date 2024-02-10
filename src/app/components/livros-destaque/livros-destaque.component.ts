import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-livros-destaque',
  templateUrl: './livros-destaque.component.html',
  styleUrls: ['./livros-destaque.component.css']
})
export class LivrosDestaqueComponent {

  @Input()
  imgCapa:string = "https://m.media-amazon.com/images/I/71v8w+IDavL._SY466_.jpg";

  @Input()
  nomeLivro:string = "";

  @Input()
  avaliacaoLivro:string="";

}
