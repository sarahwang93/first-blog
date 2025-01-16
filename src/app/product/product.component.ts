import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Product } from './product.model';
import { AnimationEvent } from '@angular/animations';
import { getProductAction, addProductAction } from './store/products.actions';
import { AnimationQueryMetadata } from '@angular/animations';
import { animate, style, transition, trigger, state, AnimationPlayer, keyframes, query } from "@angular/animations";
import { nextTick } from 'process';
import { Observable, fromEvent } from 'rxjs';
import * as productStore from './store/products.reducer';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  host: {
    '[@imgAnimationTrigger]': 'statetransfer',
    '(@imgAnimationTrigger.start)': 'captureStartEvent($event)',
    '(@imgAnimationTrigger.done)' : 'captureDoneEvent($event)'
  },
  animations: [
    trigger("imgAnimationTrigger", [
      state("void", style({ opacity: 0 })),
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        query('.content', animate('5s', style({color:"#00FF88"})))
      ]),
    ])
  ]
})
export class ProductComponent implements OnInit{

  @ViewChild('toggle') toggle: ElementRef;
  @ViewChild('listener') listener: ElementRef;
  
  statetransfer: "void" | "open" | "closed" = "open";
  
  //productEntries need to be defined
  //otherwise the state is undefined
  productEntries$: Observable<any> 

  photoUrl = 'https://www.finsmes.com/wp-content/uploads/2022/06/openreplay.png';
  
  constructor(private store: Store, private http: HttpClient){
    this.productEntries$ = new Observable();
  }

  ngOnInit(){
    productStore.reducer;
  }

  fetchProduct(){
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(
      (products:any) => (
        this.store.dispatch(getProductAction({id:3}))
      ),
    )
  }

  toggleState(){
    if(this.statetransfer === "open")
      this.statetransfer = "closed"
    else{
      this.statetransfer = "open"
    }
  }

  addProduct(){
    const newProduct: Product = { userId: 1, id: Math.random(), title: "", body:"", price: 10}
    this.store.dispatch(addProductAction(newProduct))
  }

  listenToStart(): void{
    let clickListen = fromEvent(this.listener.nativeElement, 'click');
    clickListen.subscribe(event => {
      console.log('click' + event)
    })
  }

  //no change on the status 
  captureStartEvent(event: AnimationEvent){
     event.toState = event.toState as "open" | "closed" | "void"
     console.log(`start ${this.statetransfer} => ${event.toState} started`)
  }

  captureDoneEvent(event: AnimationEvent){
     console.log(`done ${this.statetransfer} => ${event.toState} started`)
  }
}

