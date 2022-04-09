import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private select: ElementRef) {
    select.nativeElement.style.background = "#e9e767 "
  }

}
