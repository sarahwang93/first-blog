import { Component, CUSTOM_ELEMENTS_SCHEMA, OnChanges, SimpleChanges, Input, AfterViewChecked, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ProblemComponent } from './problem/problem.component';
import { fromEvent } from 'rxjs';


// @ts-ignore

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [ ModalComponent, ProblemComponent, MainpageComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class MainpageComponent implements OnChanges {

  @Input() client = "init";

  @ViewChild('detect') mydetect: ElementRef;

  greetings: Promise<string> | null = null;
  dateObj: Date = new Date();
  
  
  btnClickHandler(){
    if(this.mydetect){
      this.mydetect.nativeElement.innerHTML = "clicked";
    }
  }

  ngOnInit(): void {
  };


  onClick(): void {
    this.client = "new init"
    fromEvent(this.mydetect.nativeElement, 'click').subscribe(() => this.btnClickHandler());
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
