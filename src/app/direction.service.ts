import { Injectable, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Directive, ElementRef} from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime, map, scan } from 'rxjs/operators';
import { FirstblogService  } from './firstblog.service';

@Injectable({
  providedIn: 'root'
})

@Directive({
  standalone: true, 
  selector: '[direction]'
})

export class DirectionService implements OnInit {
  constructor(private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef, private firstblogService: FirstblogService) {

   }

  getDirection() {
      fromEvent(document, 'click')
        .pipe(
          throttleTime(1000),
          map((event) => event.timeStamp),
          scan((count, timeStamp) => count + timeStamp, 0)
        )
        .subscribe((count) => console.log(count))
      }

  ngOnInit(): void {
    const size = '60px';
    this.elementRef.nativeElement.setAttribute('loading', 'lazy');
    this.elementRef.nativeElement.style.width = size;
    this.elementRef.nativeElement.style.height = size;
  }
}
