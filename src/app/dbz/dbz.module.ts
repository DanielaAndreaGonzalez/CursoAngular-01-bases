import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';

import { PersonajesComponent } from './personajes/personajes.component';

import { DbzService } from './services/dbz.service';
import { AddCharacterComponent } from './Components/add-character/add-character.component';
import { ListComponent } from './Components/list/list.component';


@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    
    AddCharacterComponent,
    ListComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    //Seria el singleton la unica instancia
    DbzService
  ]
 
})
export class DbzModule { }
