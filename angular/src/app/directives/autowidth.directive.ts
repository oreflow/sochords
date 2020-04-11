import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[scAutoWidth]'
})
export class AutoWidthDirective implements OnInit, OnDestroy {
  @Input() minSize: number;
  subscriptions: Subscription[] = [];

  constructor(private el: ElementRef, private ngModel: NgModel) {}

  ngOnInit() {
    this.resize();
    this.subscriptions.push(
      this.ngModel.valueChanges.subscribe((value) => {
        this.resize();
      }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  private resize() {
    if (this.el.nativeElement.type === 'textarea') {
      const value = this.el.nativeElement.value;
      const sizes = value.split('\n').map((row) => row.length);
      const cols = Math.max(this.minSize, Math.max(...sizes) + 3);
      this.el.nativeElement.setAttribute('cols', cols);
      return;
    }
    const size = Math.max(this.minSize, this.el.nativeElement.value.length * 0.8);
    this.el.nativeElement.setAttribute('size', size);
  }
}
