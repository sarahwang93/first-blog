import { Directive, Input, OnInit, ElementRef, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { Product } from '../model/product.model';


export interface ReadTimeConfig{
  wordsPerMinute: number;
}

@Directive({
  selector: '[appAppRead]',
  standalone: true
})
export class AppReadDirective implements OnInit {

  @Input() configuration: ReadTimeConfig = {
    wordsPerMinute: 200
  };

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
      const text = this.el.nativeElement.textContent;
      console.log(text);
  }

}
