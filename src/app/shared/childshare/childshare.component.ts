import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { from, fromEvent, BehaviorSubject, ReplaySubject } from 'rxjs';
import { Observable, takeUntil, AsyncSubject } from 'rxjs';
import { interval } from 'rxjs';
import { defaultIfEmpty, map, retry, delayWhen, switchMap } from 'rxjs/operators';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-childshare',
  standalone: true,
  imports: [],
  templateUrl: './childshare.component.html',
  styleUrl: './childshare.component.css',
})

export class ChildshareComponent implements OnInit{

  @ViewChild("eventhot") hotclick: ElementRef;
  @Input("event") eventrender = 'init';
  
  ngOnInit(): void {

    const observableObj = new Observable(
      ((subscribedObserver: any) => {
        try {
          subscribedObserver.next(1);
          subscribedObserver.next(2);
          subscribedObserver.next(3);
          subscribedObserver.complete();
        } catch {
          subscribedObserver.error();
        }
    })
  );

    observableObj.subscribe((value: any) => console.log(value));
  }


  cold_data_sender(): void {
    //cold send 
    const stream = [1, 2, 3, 4];
    console.log(stream)
    const observable: Observable<Number> = from(stream)
    
    //the subscribe is to deal with each value in observable object
    observable.subscribe((value: number) => console.log(Date.now()));
  }

  hot_data_sender(): void {
     let buttonEve =  fromEvent(this.hotclick.nativeElement, 'click').subscribe(
      () => this.eventrender = 'test'
    )
     let button2 =  fromEvent(this.hotclick.nativeElement, 'click')
     const clickBef = button2.pipe(
        takeUntil(interval(1000))
     )
     // if the click happened, then output mouse event
     // otherwise output no clicks.
     const res = clickBef.pipe(
        defaultIfEmpty("no clicks")
     )

     res.subscribe(x => console.log(x))
  }

  //multi-casting of rxjs
  multi_casting(): void {
    const source = interval(1000);

    const exp = source.pipe(
      map((val) => {
        if(val > 2){
          throw val;
        }
        return val;
      }), 

      retry(2),
    );

    const result = source.pipe(
      switchMap(() =>
        interval(1000)
          .pipe(map((val) => {
          if(val > 10){
            throw val;
          }
        }))
      )
    )

    // Output: 0,1,2,3,4,5,....
    const subscribe = source.subscribe((val) => console.log(val));
    const result_sub = result.subscribe((val) => console.log(val));

    // Unsubscribe from observable after 10s
    // Output: 0,1,2,3,4,5,6,7,8,10 second has been passed
    setTimeout(() => {
      subscribe.unsubscribe();
      console.log("10 second has been passed");
    }, 10000);
  }
}
