
import {Component} from '@angular/core';

@Component({
        selector    :   'app-contador',
        templateUrl :   './contador.component.html',
        
        
})
export class ContadorComponent{

    propiedad1:string = 'Contador app';
  numero:number = 10;
  base:number = 5;

 sumar(valor:number):void {
 this.numero=this.numero+valor;
}
restar(valor:number):void{
  this.numero =this.numero-valor;
}

}