import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('modalState', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void <=> *', animate('0.2s')),
    ]),
  ],
})
export class ModalComponent {
  @Input() titulo: string = "";
  @Input() modalAberto: boolean = false;
  @Output() closeModal = new EventEmitter();

  close() {
    this.closeModal.emit();
  }


  
}
