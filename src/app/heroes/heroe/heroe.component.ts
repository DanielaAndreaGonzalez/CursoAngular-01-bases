
import { Component } from "@angular/core";
@Component({
    selector     : 'app-heroes',
    templateUrl  :  './heroe.component.html',
})
export class HeroeComponent{

    nombre:string  = 'Ironman';
    edad:number = 45;
    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }
    obtenerNombre(): string{
        return `${ this.nombre} + - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }

}