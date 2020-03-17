import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[scColSpan]'
})
export class ColSpanDirective implements OnInit {
  @Input() scColSpan: number;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.scColSpan) {
      this.el.nativeElement.setAttribute('colspan', this.scColSpan);
    }
  }
}
