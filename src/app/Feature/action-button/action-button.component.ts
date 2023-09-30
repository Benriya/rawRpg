import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {
  @Input() actionName = '';
  @Output() buttonClicked = new EventEmitter<string>();
}
