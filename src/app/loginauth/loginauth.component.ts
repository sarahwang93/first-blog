import { Component, Input, ViewChild, ElementRef, OnDestroy, Output } from '@angular/core';

import { AuthService } from '../auth.service';
import { EventEmitter } from '@angular/core'
import { NgFor, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { Modal } from 'bootstrap';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';


interface User {
  id: number;
  name: string;
  premium: boolean;
}

@Component({
  selector: 'app-loginauth',
  standalone: true,
  imports: [NgFor,
    ReactiveFormsModule,
    NgIf,
    RouterOutlet
  ],
  templateUrl: './loginauth.component.html',
  styleUrl: './loginauth.component.css'
})

//add --ssl option for the authentication return back

export class LoginauthComponent implements OnDestroy{

    email: string = "";
    profile: string = "";
    openid: string = "";

    @Input() authInfo: 'forecast' | 'history';
    toggleModal: boolean = false;

    //@ViewChild('exampleModal') expModal: ElementRef;

    @Output() close = new EventEmitter();

    isBrowser = false;
  
    constructor(private authService: AuthService){
      this.authInfo = 'history'
    }
    
    users: User[] = [
      { id: 1, name: 'John Doe', premium: false },
      { id: 2, name: 'Jane Doe', premium: true },
      { id: 3, name: 'Alice Doe', premium: true },
      { id: 4, name: 'Bob Doe', premium: true },
    ];
  
    selectedUser: User | undefined;
  
    trackBy(_ : any, user: User) {
      console.log("trackBy: " + user.id)
      return user.id;
    }

    loginAuth(){
      
    }

    selectUser(user: User)
    {
      this.selectedUser = user
      console.log(this.selectedUser)
    }

    modalCLick(){
      this.toggleModal = !this.toggleModal
      /*
      var modalButton = new Modal(this.expModal.nativeElement, {});
      document.onreadystatechange = function() {
        modalButton.show(); 
      };*/
    }

    ngOnInit(){
      this.selectedUser = this.users[0];
    }

    ngOnDestroy(){
    
    }

    closeModal(){
      this.close.emit();
    }

}
      
