import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent {
  
  @Output() onDeleteID: EventEmitter<string> = new EventEmitter();
  
  @Input()  
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  onDeleteCharacter(id?: string):void{
    //TODO: Emitir el ID del personaje
    if(!id) return;

    this.onDeleteID.emit(id);
  }

}
 