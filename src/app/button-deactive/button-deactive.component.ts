import { Component, Injectable } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { UrlTree } from '@angular/router';
import { NUser } from '../../model/nuser.model';
import { ConfirmationService } from 'primeng/api'; 


export type CanDeactivateType = Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;

@Injectable({
  providedIn: 'root'
})
export class ButtonDeactiveComponent {

  promptUser: NUser = { id: 1, name: 'John', premium: false };
  constructor(private _confirmation: ConfirmationService){}

  canDeactive(): CanDeactivateType {
    console.log("check")
    if(this.promptUser){
      const deactiveSubject = new Subject<boolean>();
      this._confirmation = new ConfirmationService();

      this._confirmation.confirm({
        message: 'Are you sure you want to leave this page?',
        accept: () => deactiveSubject.next(true),
        reject: () => deactiveSubject.next(false)
      })

      return deactiveSubject;
    } else {
      return true;
    }
  }
}
