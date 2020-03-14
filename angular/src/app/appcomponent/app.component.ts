import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer  } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sochords';

  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry) {

    this.matIconRegistry.addSvgIcon(
      'sochord_logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/sochord_logo.svg'));
  }
}
