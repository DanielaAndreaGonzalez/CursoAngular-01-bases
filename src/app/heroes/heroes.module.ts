import { NgModule } from "@angular/core";
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from "./heroe/heroe.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //Indica que quiero que sea visible
    exports: [
        ListadoComponent
    ],
    //Solo van los modulos en imports
    imports:[
        CommonModule
    ]
})

export class HeroeModule{

}