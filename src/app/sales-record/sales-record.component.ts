import { NgIf } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Component, OnInit, Output, EventEmitter, AfterViewInit, 
  ViewChild, viewChild, SimpleChanges, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Client } from '../../model/client.model';
import { RegisterComponent } from '../register/register.component';
import { RoleService } from '../role.service';
import { Subscription, BehaviorSubject } from 'rxjs';
import { NgModel, FormsModule } from '@angular/forms';
import { ShowHideDirective } from '../show-hide.directive';
import { InjectionToken } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-sales-record',
  standalone: true,
  imports:[NgIf, FormsModule],
  templateUrl: './sales-record.component.html',
  styleUrls: ['./sales-record.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
  // providers: [RoleService]
})
export class SalesRecordComponent implements OnInit, AfterViewInit, OnChanges {

  @Output() a = new EventEmitter<string>();
  @Output() b = new EventEmitter<string>();
  message: string = 'Hello from sales component!'
  showCounterButton: boolean = true;
  fromChild: boolean = true;
  @Input() event: string = "true";
  @Input() searchArea: string = '123';
  changes: object = {};
  @ViewChild(RegisterComponent, {static: true}) registerCom!: RegisterComponent;

  constructor() { }

  checkRecordsA():void{
    this.a.emit(this.message)
  }

  checkRecordsB():void{
    this.b.emit()
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    const value = changes['searchArea']
  }

  ngOnInit(): void {
  }

  clickChange(): void{
    this.searchArea = "default"
    // this.searchArea = "Hello from sales component!"
    /*
    const behaviorSubject = new BehaviorSubject('event -1');
    behaviorSubject.next('event 0');
    behaviorSubject.subscribe(event => console.log(event))
    behaviorSubject.next('event 1');
    behaviorSubject.next('event 2');
    behaviorSubject.next('event 3');
    */
  }

  toggleCounterButton():void{
    this.showCounterButton = !this.showCounterButton;
    console.log(this.showCounterButton)
  }

  ngAfterViewInit(): void {
    
  }

}


