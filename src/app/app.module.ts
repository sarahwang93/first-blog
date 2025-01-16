import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FirstblogService } from './firstblog.service';
import { AuthService } from './auth.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DirectionService } from './direction.service';
import { RoleService } from './role.service';
import { ButtonComponent } from './button/button.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterLinkActive, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { SalesRecordComponent } from './sales-record/sales-record.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store'
import { Router } from 'express';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginauthComponent } from './loginauth/loginauth.component';
import { NgbModule, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatCard, MatCardModule} from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { SchedulerService } from './scheduler.service';
import { SchedulerSetService } from './scheduler-set.service';
import { ModalComponent } from './mainpage/modal/modal.component';
import { ProblemComponent } from './mainpage/problem/problem.component';
import { AuthGuardActivateComponent } from './auth-guard-activate.guard';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ChildshareComponent } from './shared/childshare/childshare.component';
import { HttpClient, HttpClientXsrfModule } from '@angular/common/http';
import { JWT_OPTIONS, JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { ConfirmationService } from 'primeng/api'; 
import * as productStore from './product/store/products.reducer';
import { navigateFeature, navigateReducer } from './navigation/store/navigate.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UsercompComponent } from './usercomp/usercomp.component';
import { TasksComponent } from './tasks/tasks.component';


export function tokenGetter() {
  console.log(localStorage.getItem("access_token"))
  return localStorage.getItem('access_token');
}

const disableAnimations = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches

@NgModule({
  declarations: [
    AppComponent,
    DirectionService,
    RoleService,
    ButtonComponent,
    DetailsComponent,
    AboutComponent,
    ContactComponent,
    SalesRecordComponent,
    NotFoundComponent,
    MainpageComponent,
    LoginauthComponent,
    ChildshareComponent
  ],
  imports: [
    NgOptimizedImage,
    NgbModule,
    BrowserModule,
    CommonModule,
    RouterOutlet,
    RouterLinkActive,
    FormsModule,
    RouterModule,
    AppRoutingModule, 
    SalesRecordComponent,
    EnterpriseComponent,
    HttpClientXsrfModule,
    HttpClientModule,
    UsercompComponent,
    TasksComponent,
    StoreModule.forRoot({product: productStore.reducer}),
    StoreModule.forFeature("navigateEntries", navigateReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
    }
  }),
  ],
  providers: [
    FirstblogService,
    RoleService,
    AuthService,
    AuthGuardActivateComponent,
    JwtHelperService,
    ConfirmationService,
    HttpClientXsrfModule,
    [{provide: SchedulerSetService, useClass: SchedulerService}],
  ],
  exports: [],
  bootstrap: [AppComponent, CommonModule]
})

export class AppModule { }










