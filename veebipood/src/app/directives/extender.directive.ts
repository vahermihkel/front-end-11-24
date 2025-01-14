import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ // autosize
  selector: '[extender]',
  standalone: true
})
export class ExtenderDirective {

  constructor(private elementRef: ElementRef) { 
    // this.elementRef.nativeElement.style.backgroundColor = "grey";
    // this.elementRef.nativeElement.style.color = "red";
    this.elementRef.nativeElement.style.width = "202px";
  }

  @HostListener("input")
  adjust(){
    const element = this.elementRef.nativeElement;
    element.style.height = "auto";
    element.style.height = element.scrollHeight + "px";
    element.style.overflow = "hidden";
  }

}
