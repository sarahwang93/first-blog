import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SalesRecordComponent } from './sales-record/sales-record.component';
import { RegisterComponent } from './register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { provideHttpClient } from '@angular/common/http';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginauthComponent } from './loginauth/loginauth.component';
import { ModalComponent } from './mainpage/modal/modal.component';
import { ProblemComponent } from './mainpage/problem/problem.component';
import { ChildGuardActiveGuard } from './child-guard-active.guard';
import { AuthGuardActivateComponent } from './auth-guard-activate.guard';
import { ChildshareComponent } from './shared/childshare/childshare.component';
import { SubenterpriseComponent } from './enterprise/subenterprise/subenterprise.component';
import { NavigationComponent } from './navigation/navigation.component';
import { withFetch } from '@angular/common/http';
import { ButtonDeactiveComponent } from './button-deactive/button-deactive.component';
import { provideStore } from '@ngrx/store';
import { ProductComponent } from './product/product.component';
import { SummaryComponent } from './summary/summary.component';


const routes: Routes = [
  // case sensitive
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'details', component: DetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact/:id', component: ContactComponent },
  { path: 'product', component: ProductComponent },
  { path: 'button', component: ButtonComponent, canDeactivate: [ ButtonDeactiveComponent ] },
  { path: 'about', component: AboutComponent, canActivateChild: [ ChildGuardActiveGuard ] },
  { path: 'enterprise', component: EnterpriseComponent, canActivate: [ AuthGuardActivateComponent ],
    children: [
      { path: 'subenterprise', component: SubenterpriseComponent, 
        children: [
          { path: 'nestedenterprise', component: SubenterpriseComponent }
        ]  
      }
    ]
   },
  { path: 'home',
    component: MainpageComponent, 
    children: [
      { path: 'modal', component: ModalComponent },
      { path: 'problem', component: ProblemComponent },
    ]
  },
  { path: 'problem', component: ProblemComponent },
  { path: 'login', component: LoginauthComponent }, 
  { path: 'summary', component: SummaryComponent },
  { path: 'records', component: SalesRecordComponent },
  { path: 'childshare', component: ChildshareComponent },
  { path: 'navigate', component: NavigationComponent },
  { path: '**', component: NotFoundComponent },
  
];

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()), provideRouter(routes), provideClientHydration(),
    provideHttpClient(),
    provideOAuthClient(),
    provideAnimationsAsync(), provideStore()
  ]
};
