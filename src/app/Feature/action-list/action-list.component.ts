import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Hero} from "../../Model/hero-model";

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.scss']
})
export class ActionListComponent {
  @Input() character: Hero | null = null;
  @Input() actions: string[] = [];
  @Output() buttonClicked = new EventEmitter<string>();


  activateAction(name: string): void {
    this.buttonClicked.emit(name);
  }
}
