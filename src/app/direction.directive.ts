import {
    Directive,
    OnInit,
    EventEmitter,
    HostListener,
    Input,
    Output,
    ElementRef,
    TemplateRef,
    ViewContainerRef
  } from '@angular/core';
  
  @Directive({
    selector: '[imgCustom]'
  })
  export class Direction implements OnInit {
  
    showForRegister:boolean = true
    constructor(
      private elementRef: ElementRef,
      private templateRef: TemplateRef<any>,
      private viewContainerRef: ViewContainerRef,
    ) {
    }
  
    ngOnInit() {
        const size = '60px';
        this.elementRef.nativeElement.style.width = size;
        this.elementRef.nativeElement.style.height = size;

      if (this.showForRegister) {
        // Render the view
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        // Clear the view
        this.viewContainerRef.clear();
      }
    }
  }