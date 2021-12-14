import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';



@NgModule({
    //componentes o elementos que contiene un modulo
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    imports: [

    ]

})
export class ContadorModule { }