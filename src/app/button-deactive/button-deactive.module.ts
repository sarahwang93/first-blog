import { ButtonComponent } from "../button/button.component";
import { NgModule } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@NgModule({
    imports: [
        ButtonComponent,
    ],
    declarations: [ 
        
     ],
    exports: [ 
       
    ],
    providers: [
        ConfirmationService
    ]
})

export class ButtonModule {

}