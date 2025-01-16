import { ButtonComponent } from './button/button.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { SalesRecordComponent } from './sales-record/sales-record.component';
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Router } from 'express';
import { RegisterComponent } from './register/register.component';
import { LoginauthComponent } from './loginauth/loginauth.component';
import { ModalComponent } from './mainpage/modal/modal.component';
import { ProblemComponent } from './mainpage/problem/problem.component';
import { AuthGuardActivateComponent } from './auth-guard-activate.guard';
import { ChildshareComponent } from './shared/childshare/childshare.component';
import { SubenterpriseComponent } from './enterprise/subenterprise/subenterprise.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductComponent } from './product/product.component';
import { SummaryComponent } from './summary/summary.component';
import { ButtonDeactiveComponent} from './button-deactive/button-deactive.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'register', component: RegisterComponent },
    { path: 'detail', redirectTo: 'details', pathMatch: 'full' },
    { path: 'details', component: DetailsComponent },
    { path: 'button', component: ButtonComponent, canDeactivate:[ButtonDeactiveComponent] },
    { path: 'contact', component: ContactComponent, 
      children: [
        { path: 'contact:id', component: ContactComponent },
      ]
    },
    { path: 'about', component: AboutComponent  },
    { path: 'product', component: ProductComponent },
    { path: 'enterprise/subenterprise', component: SubenterpriseComponent },
    { path: 'enterprise', component: EnterpriseComponent, canActivate:[AuthGuardActivateComponent],
      children: [
        { path: 'subenterprise', component: SubenterpriseComponent,
          children: [
            { path: 'nestedenterprise', component: SubenterpriseComponent}
          ]
         },
      ]
    },
    { path: 'home', 
      component: MainpageComponent, 
      children: [
        { path: 'modal', component: ModalComponent },
        { path: 'problem', component: ProblemComponent },
      ]
    },
    { path: 'navigate', component: NavigationComponent },
    { path: 'records', component: SalesRecordComponent },
    { path: 'login', component: LoginauthComponent },
    { path: 'summary', component: SummaryComponent },
    { path: 'childshare', component: ChildshareComponent },
    { path: 'problem', component: ProblemComponent},
    { path: '**', component: NotFoundComponent},
    
    
  ];

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot(routes),
      CommonModule, BrowserModule],
    exports: [RouterModule],
    providers: []
  })

export class AppRoutingModule {
  
  ngOnInit(): void{
     console.log("loading routings...");
    //this.roleService.assignRole();
 }

}