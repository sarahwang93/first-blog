import { Component, OnInit } from '@angular/core';
import { iif, of } from 'rxjs';
import {  } from '../../model/product.model';

@Component({
  selector: 'app-shared',
  standalone: true,
  imports: [],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.css'
})
export class SharedComponent implements OnInit{

  subscribeShare() {
    let subscribeTofirst: boolean = true;
    const firstOrSecond = iif(() => subscribeTofirst, of('first'), of('second'))
    subscribeTofirst = true;
    firstOrSecond.subscribe(value => console.log(value))
  
    subscribeTofirst = false;
    firstOrSecond.subscribe(value => console.log(value))
  }

  ngOnInit(): void {
      
  }
}
