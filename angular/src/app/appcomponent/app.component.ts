import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer  } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/auth';

enum _AppState {
  INITIALIZING,
  RUNNING,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sochords';
  states = _AppState;
  state = _AppState.INITIALIZING;

  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
    private auth: AngularFireAuth) {
    this.matIconRegistry.addSvgIcon(
      'sochord_logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/sochord_logo.svg'));
  }

  ngOnInit() {
    this.auth.user.subscribe(async (user) => {
      if (user === null) {
        await this.auth.signInAnonymously();
      }
      this.state = _AppState.RUNNING;
      console.log('TODO: User change: ', user);
    });
  }
}
