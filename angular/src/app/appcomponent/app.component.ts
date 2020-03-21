import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer  } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

import { AuthComponent } from 'app/components/auth/auth.component';
import { MatDialog } from '@angular/material/dialog';


enum _AppState {
  INITIALIZING,
  ANONYMOUS,
  SIGNED_IN,
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
  _snackBarRef: MatSnackBarRef<any>;

  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog,
    private auth: AngularFireAuth) {
    this.matIconRegistry.addSvgIcon(
      'sochords_logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/sochord_logo.svg'));
    this.matIconRegistry.addSvgIcon(
      'google_logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/google_logo.svg'));
  }

  ngOnInit() {
    this.auth.user.subscribe(async (user) => {
      if (!user) {
        await this.auth.signInAnonymously();
        return;
      }
      this.state = user.isAnonymous ? _AppState.ANONYMOUS : _AppState.SIGNED_IN;
      if (user.isAnonymous) this._showAnonymousSnackBar();
      else this._showSignedInSnackBar(user);
      console.log('TODO: User change: ', user);
    });
  }

  _showAnonymousSnackBar() {
    if (this._snackBar) this._snackBar.dismiss();
    this._snackBarRef = this._snackBar.open(
      'Sign in to keep your content accessible between devices',
      'SIGN IN',
      { duration: 3000 });
    this._snackBarRef.onAction().subscribe(() => this.openAuthDialog());
  }

  _showSignedInSnackBar(user: firebase.User) {
    if (this._snackBar) this._snackBar.dismiss();
    this._snackBarRef = this._snackBar.open(
      `Signed In as ${user.email}`,
      null,
      { duration: 2000 });
  }

  openAuthDialog() {
    console.log(this._dialog);
    this._dialog.open(AuthComponent, {width: '350px',});
  }

  signOut() {
    this.auth.signOut();
  }
}
