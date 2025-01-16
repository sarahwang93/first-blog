import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { AppReadDirective } from '../app-read.directive';
import { Observable } from 'rxjs';
import { animate, stagger, style, group, transition, trigger, state, AnimationPlayer, keyframes, query } from "@angular/animations";
import { select, Store } from '@ngrx/store';
import { gotoNavigateAction, addNavigateAction } from './store/navigate.actions';
import { count } from 'console';
import { Navigate } from './navigate.model';
import { NgIf } from '@angular/common';
import { selectAllNavigate, selectCountNavigate } from './store/navigate.selectors';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { NodeWithI18n } from '@angular/compiler';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [AsyncPipe, DecimalPipe, NgIf],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  animations:[
    trigger('enterLeaveTri', 
      [transition(':enter', [
        group([
          query('.enter_1_cls', 
          style({ backgroundColor: '#FF00101', opacity: 0}),
          ),
          animate(3000),
          query('.enter_2_cls', [
            style({ opacity: 0, transform: 'translateY(-100%)'}),
            animate(3000),
          ]),
          query('.enter_1_cls', [
            style({ opacity: 0, transform: 'translateY(100%)' }),
            //delay animation
            stagger(50,
              animate('3000ms', style({ opacity: 0, width:'20px'})),
            ),
            animate(3000)
          ])
        ])
      ]), 
      transition(':leave', [
        animate(
          300, 
          style({
            backgrounColor: '#FF00123',
            opacity: 0,
            transform:'translateX(-100%)'
          }),
        ),
      ]),
    ]),
  ],
})
export class NavigationComponent {
  @Input() title: string = '';

  navigateEntries$: Observable<any>;
  countNavigate$: Observable<number> = new Observable();
  allNavigates$: Observable<string[]> = new Observable();
  
  display = false;

  constructor(private router: Router, authServ: AuthService, private store: Store<Navigate>) { 
    this.navigateEntries$ = new Observable();
  }

  getStoreNav(){
    this.store.dispatch(gotoNavigateAction({tabId:0}))
  }

  countStoreNav(){    
    var newNav: Navigate = { tabId: 1, tabName: 'details', pageLevel: 3, pageLink: 'localhost:3000/details' }
    this.store.dispatch(addNavigateAction({navigate: newNav}))
  }

  ngOnInit() {
    //this.allNavigates$ = this.store.pipe(select(selectAllNavigate));
    //this.countNavigate$ = this.store.pipe(select(selectCountNavigate));
  }

  goTo(location: string){
    this.router.navigateByUrl(location);
  }

  navigateTo(){
    this.router.navigate(['/enterprise']);
  }
   
}
