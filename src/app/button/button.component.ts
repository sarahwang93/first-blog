import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit, Input, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransModule } from '../trans.pipe';
import { map, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ShowHideDirective } from '../show-hide.directive';
import { EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgClass,     
    FormsModule,
    ReactiveFormsModule,
    TransModule, 
    NgIf,
    ShowHideDirective
  ],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ButtonComponent implements OnInit {

  @Input() warn: boolean = false;
  @Input() searchText = '';
  @Input({ required: true }) id!: string;
  @Output() select = new EventEmitter();

  //static: false - query resolves before ngAfterViewInit()
  //static: true - query resolves before ngOnInit()
  @ViewChild('appShowHide', {read:TemplateRef, static: true}) appShowHide!: TemplateRef<any>;
  @ViewChild('appShowHideElse', {read: ViewContainerRef, static:true}) appShowHideElse!: ViewContainerRef;


  buttonForm = new FormGroup({
    number: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    expiration: new FormControl('', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)])
  })

  onSelect() {
    this.select.emit(this.id)
  }

  onSubmit() {
    console.log(this.buttonForm.value)
  }

  ngOnInit(): void {
    const context = {
      name: 'button',
      data: 'data'
    }

    var embeddedView = this.appShowHideElse.createEmbeddedView(this.appShowHide, context)
    embeddedView.detectChanges()
  }

  ngAfterViewInit(){
    console.log("afterInit")
  }

  setData(){

  }

}
