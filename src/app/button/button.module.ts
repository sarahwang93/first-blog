import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { ButtonComponent } from './button.component';
import { Button } from 'bootstrap';
import { TransModule } from '../trans.pipe';
import { map, mergeMap } from 'rxjs/operators';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ShowHideDirective } from '../show-hide.directive';
import { MatCard, MatCardModule} from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmationService } from 'primeng/api';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonComponent,
        TransModule,
        ShowHideDirective,
        MatCard,
        MatMenu,
        MatMenuModule, 
        MatButtonModule,
        MatButtonToggle,
        MatButtonToggleGroup,
        MatIconModule
    ],
    declarations: [ 
        
     ],
    exports: [ 
      
    ],
    providers: [
        ConfirmationService,
        provideNgxMask()
    ]
})

export class ButtonModule {

}