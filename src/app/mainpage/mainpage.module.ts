import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ProblemComponent } from './problem/problem.component';
import { MainpageRoutingModule } from './mainpage-routing.module';

@NgModule({
    declarations: [
        MainpageModule,
        ModalComponent,
        ProblemComponent
    ],
    imports: [
        MainpageRoutingModule,
        CommonModule
    ]
})

export class MainpageModule { }