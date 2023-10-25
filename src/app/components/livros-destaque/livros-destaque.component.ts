import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-livros-destaque',
  templateUrl: './livros-destaque.component.html',
  styleUrls: ['./livros-destaque.component.css']
})
export class LivrosDestaqueComponent {

  @Input()
  imgCapa:string = "";
}
