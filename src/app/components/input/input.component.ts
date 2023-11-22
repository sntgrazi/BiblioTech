import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() label: string = '';
  @Input() inputType: string = '';
  @Input() value: any;
  @Output() onInputChange: EventEmitter<any> = new EventEmitter<any>();

  emitInputChange(value: any) {
    this.onInputChange.emit(value);
  }
}
