import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { response } from 'express';

@Component({
  selector: 'app-problem',
  standalone: true,
  imports: [ AsyncPipe ],
  templateUrl: './problem.component.html',
  styleUrl: './problem.component.css',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProblemComponent implements OnInit {

  subscription: Subscription | undefined;
  unsubscript$ = new Subject();
  observable: Observable<String> | undefined;
  dataSubscription: Observable<Object> | undefined;

  constructor(private http: HttpClient){}

  loadSomeData() {
    return this.http.get("https://api.genome.ucsc.edu/list/ucscGenomes", {
      observe: "response",
      responseType: "json"
    })
  }

  ngOnInit(): void {
    this.dataSubscription = this.loadSomeData()
    const res = this.dataSubscription
    
    res?.pipe(
        takeUntil(this.unsubscript$))
        .subscribe(
          (data) => {
            console.log("subscribe: " + data)
          }        
    )

    this.dataSubscription.subscribe({
      next(data){
        console.log(data)
      },
      error(err){
        console.log(err)
      }
    })
  }

  ngOnDestroy(): void {
    this.unsubscript$?.next(new Object(1));
    this.unsubscript$?.complete();

  }

}
