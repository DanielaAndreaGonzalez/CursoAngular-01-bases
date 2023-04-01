import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeEliminado: string[] = [];


  borrar(nombre: string): void {
    // this.heroes.splice(index,1);
    //this.heroes.pop();
    let index = this.heroes.indexOf(nombre);
    this.heroeEliminado = this.heroes.splice(index, 1);
  }
}
