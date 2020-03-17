import { Component, Input } from '@angular/core';

import { ErrorType } from 'app/errors'

@Component({
  selector: 'sc-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  errorTypes = ErrorType;
  @Input() errorType: ErrorType;
}
