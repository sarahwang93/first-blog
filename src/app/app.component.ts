import { BrowserModule } from '@angular/platform-browser';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FirstblogService } from './firstblog.service';
import { RoleService } from './role.service';
import { NgIf, CommonModule, NgStyle, NgFor } from '@angular/common';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterModule, RouterLinkActive, RouterLink } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { NgbModule, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Direction } from './direction.directive';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsercompComponent } from "./usercomp/usercomp.component";
import { TaskComponent } from './tasks/task/task.component';
import { DUMMY_USER } from '../model/dummyuser.model';
import { TasksComponent } from './tasks/tasks.component';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [NgStyle, NgIf, RouterOutlet, 
    FormsModule,
    UsercompComponent, 
    TasksComponent,
    ReactiveFormsModule, RouterLink, RouterLinkActive, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbModalConfig, NgbModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppComponent implements OnInit, OnDestroy {


  @Input() routerLinkActiveOptions: any = {
    exact: true
  }

  @Input() routerLinkActive: boolean = true;
  private _counter: number = 0;

  signIn = false;
  name: string | null = null;
  red: number = 0;
  userLoggedIn = false;
  active = true;
  CardType = {
    TEACHER: "teacher",
    STUDENT: "student"
  }
  output = {
    name: 'April'
  }

  users = DUMMY_USER
  selectedUserId?: string

  onSelectUser(id: string) {
    console.log("on select: " + id)
    this.selectedUserId = id
  }

  get selectedUser() {
    return this.users.find((user) => user.id == this.selectedUserId)
  }

  title = 'angular-post-blog';
  menuDetails: any;

  constructor(public firstblogService: FirstblogService,
     public roleService: RoleService, public authService: AuthService, @Inject(DOCUMENT) private document: Document) {
      this._counter = 0;
  }

  get counter(): number {
    return this._counter;
  }

  incrementCounter() {
    this._counter += 1;
  }

  ngOnInit(): void{
    this.signIn = false;
    this.routerLinkActiveOptions = {
      exact: true
    }

    this.menuDetails = {
      menuItems: [
        {name: 'details1'},
        {name: 'details2'}
      ]
    }
  }
  ngOnDestroy(): void {
      
  }


  login():void{
    
  }

  doSomethinga(){

  }
  doSomethingb(){

  }

  doThings(){
    
  }

  //redirect page is not correct
  loginGoogle():void{
    this.authService.initConfig();
    this.authService.loginAuthThird();
    const token = this.authService.getToken();
    console.log("token loggin: " + (token))
    if(token){
      console.log(token)
      this.signIn = true;
    }
  }

}
