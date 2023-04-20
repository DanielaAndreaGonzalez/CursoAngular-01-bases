import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onIndexDelete: EventEmitter<String> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
    name: "Trunks",
    power: 10
  }]

 

  onDeleteCharacter(id?:String):void
  {
  //To-Do emitir el id del personaje 
    if(!id) return;
    this.onIndexDelete.emit(id);
  }


}
