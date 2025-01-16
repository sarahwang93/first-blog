import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage.component';
import { ModalComponent } from './modal/modal.component';
import { ProblemComponent } from './problem/problem.component';


const routes: Routes = [
    {
        path: '',
        component: MainpageComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'modal', loadChildren: () => ModalComponent },
            { path: 'problem', loadChildren: () => ProblemComponent }, 
        ]
    }

]

export class MainpageRoutingModule { }