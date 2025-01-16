import { Directive, Input, TemplateRef, ViewContainerRef, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SimpleChanges, OnChanges } from '@angular/core';

@Directive({
  selector: '[showHide]',
  standalone: true
})
export class ShowHideDirective implements OnInit, OnChanges{

  @Input('showHide') showHide: string = '';
  @Input() value: number = 0;
  @Input() highlightText = 'init';
  @Input() highlightColor = 'yellow';

  constructor(private element: ElementRef) { 
    this.showHide = "directive"
    this.element.nativeElement.classList.add(this.showHide)
    this.showHide = "newdirective"
    console.log(this.element.nativeElement.detectChanges)
  }

  changeText(){
      this.element.nativeElement.innerHTML = "new text"
  }

  ngOnInit(): void {
    // this.element.nativeElement.classList.add(this.showHide)
   
  }

  ngOnChanges(changes: SimpleChanges) {

  }

}
