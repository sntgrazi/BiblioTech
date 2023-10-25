import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  tituloCard:string = "";

  @Input()
  infoCard:string = "";

  @Input()
  iconCard:string = "";

}
