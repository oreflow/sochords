import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer  } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sochords';

  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
    private auth: AngularFireAuth) {

    this.matIconRegistry.addSvgIcon(
      'sochord_logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/sochord_logo.svg'));
    this.auth.user.subscribe((user) => {
      if (user === null) {
        this.auth.signInAnonymously();
      }
      console.log('TODO: User change: ', user);
    });
  }
}
