import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[scReadOnly]'
})
export class ReadOnlyDirective implements OnInit {
  @Input() scReadOnly: boolean;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.scReadOnly) {
      this.el.nativeElement.setAttribute('readonly', '');
    }
  }
}
