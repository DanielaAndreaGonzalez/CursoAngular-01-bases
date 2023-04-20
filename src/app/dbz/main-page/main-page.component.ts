import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';





@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


 constructor(private DbzService: DbzService){ }


 get characters(): Character[]{
  return [...this.DbzService.characters];
}

  onDeleteCharacter(id:String):void{
    this.DbzService.deleteCharacterById(id);
  }
  onNewCharacter(character: Character):void{
    this.DbzService.addCharacter(character);
  }



}

