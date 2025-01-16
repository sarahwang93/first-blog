import { Component, OnInit, ViewChild, ElementRef, Renderer2, HostBinding, Inject } from '@angular/core';
import { selectCountProducts, selectTotalPrice } from '../product/store/products.selectors';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { animate, style, transition, trigger, state, AnimationPlayer } from "@angular/animations";
import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import { AnimationBuilder } from '@angular/animations';
import { Store } from '@ngrx/store';
import { Greeter } from '../../classes/greeter.class';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [AsyncPipe, DecimalPipe],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      transition ('* => open', [
        animate ('1s',
          style ({ opacity: '*' }),
        ),
      ]),
      transition('* => *', [
        animate('1s')
      ])
    ]),
    trigger('enterLeave', [
      transition(':enter', [
        style({ opacity: 0, transform:'scale(0.8)' }),
        animate('1s easy-in', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        style({ opacity: 0, transform:'scale(0.8)' }),
        animate('1s easy-out', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ])],
    
})
export class SummaryComponent implements OnInit{

  countProduct$: Observable<number> = new Observable();
  totalPrice$: Observable<number> = new Observable();
  player: AnimationPlayer;
  value: number = 0;
  initState: "open" | "closed" = "open";

  @HostBinding('@.disabled')isSpinning = false;

  @ViewChild('ani') myani: ElementRef;
  @ViewChild('ana') myana: ElementRef;

  private host: HTMLElement;

  constructor(private store: Store, private render: Renderer2, 
    private _builder: AnimationBuilder){
    // this.countProduct$ = this.store.select(selectCountProducts)
    // this.totalPrice$ = this.store.select(selectTotalPrice)
  }

  makeAnimation(){
    console.log(this.myana.nativeElement.classList)
    const myAna = this._builder.build([
      style({
        height: 100,
        width: 100
      }),
      animate('1s', style({backgroundColor: '#00FF32'}))
    ])
    this.player = myAna.create(this.myana.nativeElement)
  }

  onSpinning(){
    this.isSpinning = !this.isSpinning
  }

  onBoxClick(){
    //this.myani.nativeElement.classList.add("move1")
    this.render.removeClass(this.myani.nativeElement, "box")
    this.render.addClass(this.myani.nativeElement, "box1")
    this.makeAnimation()
    this.player.play()
  }

  getElementInfo(){
    const greeter = new InjectionToken('greeter', {
      providedIn: 'root',
      factory: () => Greeter
    });
    //the event name could be replaced with animationend and animationiteration
    this.myani.nativeElement.addEventListener("animationstart", (event: AnimationEvent) => {
      console.log(event)
      new Promise((resolve, reject) => {
        if (this.value == 0){
          reject('the value cannot be 0');
        }
        else{
          resolve('the value is valid');
        }
      }
      )
    })
  }

  ngOnInit(): void {
  }
}
