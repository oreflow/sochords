import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialogRef } from '@angular/material/dialog';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

import SongService from 'app/service/song.service';

const INVALID_EMAIL_ADDRESS = 'Invalid email address.';
const INTERNAL_ERROR = 'Internal error occurred.';

enum _AuthComponentState {
  INITIALIZING,
  ANONYMOUS,
  CREATE_ACCOUNT,
  SIGNED_IN,
  RESET_PASSWORD,
  LOADING,
}

@Component({
  selector: 'sc-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  states = _AuthComponentState;
  state: _AuthComponentState = _AuthComponentState.INITIALIZING;
  user$: Observable<firebase.User>;
  errorMessage?: string;
  passwordResetMessage?: string;
  username: string;
  password: string;


  constructor(
    private _router: Router,
    private _songService: SongService,
    private _dialogRef: MatDialogRef<AuthComponent>,
    private _auth: AngularFireAuth) {}

  async ngOnInit() { 
    const user = await this._auth.currentUser;
    if (user.isAnonymous) this.state = _AuthComponentState.ANONYMOUS;
    else this.state = _AuthComponentState.SIGNED_IN;
    this.user$ = this._auth.user;
  }

  async signInWithGoogle() {
    this.state = _AuthComponentState.LOADING;
    const anonymousUser = await this._auth.currentUser;
    try {
      const googleAuthProvider = new auth.GoogleAuthProvider();
      await anonymousUser.linkWithPopup(googleAuthProvider);

      this._router.navigate(['']);
      this.closeDialog();
    } catch (err) {
      console.error(err);
      // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#sign-inwith-popup
      switch(err.code) {
        case 'auth/auth-domain-config-required':
        case 'auth/cancelled-popup-request':
        case 'auth/operation-not-allowed':
        case 'auth/operation-not-supported-in-this-environment':
        case 'auth/provider-already-linked':
        case 'auth/unauthorized-domain':
          this.errorMessage = INTERNAL_ERROR;
          break;
        case 'auth/credential-already-in-use':
          await this._copyDataAndSignInWithCredential(err.credential);
          anonymousUser.delete();
          this._router.navigate(['']);
          this.closeDialog();
          break;
        case 'auth/email-already-in-use':
          this.errorMessage = 'Email already in use, try signing in instead.';
          break;
        case 'auth/popup-blocked':
          this.errorMessage = 'Error signing in, make sure popups are allowed.';
          break;
        case 'auth/popup-closed-by-user':
          this.errorMessage = '';
          break;
      }
    }
    this.state = _AuthComponentState.ANONYMOUS;
  }

  async _copyDataAndSignInWithCredential(credential: auth.AuthCredential) {
    try {
      console.log(credential);
      const songs = await this._songService.getMySongsSnapshot();
      const newUser = await this._auth.signInWithCredential(credential);
      for (const song of songs) {
        song.ownerUid = newUser.user.uid;
        await this._songService.createCopyOfSong(song);
      }
    } catch (err) {
      console.error(err);
      switch(err.code) {
        case 'auth/account-exists-with-different-credential':
        case 'auth/invalid-credential':
        case 'auth/operation-not-allowed':
        case 'auth/user-disabled':
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-verification-code':
        case 'auth/invalid-verification-id':
          this.errorMessage = INTERNAL_ERROR;
      }
    }
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    this.state = _AuthComponentState.LOADING;
    const anonymousUser = await this._auth.currentUser;
    try {
      const userCredential = await this._auth.signInWithEmailAndPassword(email, password);
      this._copyDataAndSignInWithCredential(userCredential.credential);
      anonymousUser.delete();
      this._router.navigate(['']);
      this.closeDialog();
    } catch (err) {
      console.error(err);
      // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#sign-inwith-email-and-password
      switch (err.code) {
        case 'auth/invalid-email':
          this.errorMessage = INVALID_EMAIL_ADDRESS;
          break;
        case 'auth/user-disabled':
          this.errorMessage = 'Your account has been disabled.';
          break;
        case 'auth/argument-error':
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          this.errorMessage = 'Invalid Email/Password combination.';
          break;
      }
    }
    this.state = _AuthComponentState.ANONYMOUS;
  }

  async createNewAccount(email: string, password: string) {
    this.state = _AuthComponentState.LOADING;
    const anonymousUser = await this._auth.currentUser;
    try {
      const credential = await auth.EmailAuthProvider.credential(email, password);
      await anonymousUser.linkWithCredential(credential);
      await this._auth.signInWithCredential(credential);

      this.closeDialog();
    } catch (err) {
      console.error(err);
      // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#create-user-with-email-and-password
      switch(err.code) {
          // Create Account.
        case 'auth/email-already-in-use':
          this.errorMessage = 'There is already an account using that email';
          break;
        case 'auth/invalid-email':
          this.errorMessage = INVALID_EMAIL_ADDRESS;
          break;
        case 'auth/operation-not-allowed':
          this.errorMessage = INTERNAL_ERROR;
          break;
        case 'auth/weak-password':
          this.errorMessage = 'Please choose a stronger password';
          break;
          // Link with credential
        case 'auth/provider-already-linked':
        case 'auth/invalid-credential':
        case 'auth/credential-already-in-use':
        case 'auth/operation-not-allowed':
        case 'auth/wrong-password':
        case 'auth/invalid-verification-code':
        case 'auth/invalid-verification-id':
          this.errorMessage = INTERNAL_ERROR;
          break;
      }
    }
    this.state = _AuthComponentState.CREATE_ACCOUNT;
  }

  resetPassword(email: string) {
    this.state = _AuthComponentState.LOADING;
    try {
      this._auth.sendPasswordResetEmail(email);
      this.passwordResetMessage = 'Instructions sent to your email.';
    } catch (err) {
      switch (err.code) {
        case 'auth/invalid-email':
          this.errorMessage = INVALID_EMAIL_ADDRESS;
          break;
        case 'auth/user-not-found':
          this.errorMessage = 'Account does not exist';
          break;
        case 'auth/missing-android-pkg-name':
        case 'auth/missing-continue-uri':
        case 'auth/missing-ios-bundle-id':
        case 'auth/invalid-continue-uri':
        case 'auth/unauthorized-continue-uri':
          this.errorMessage = INTERNAL_ERROR;
          break;
      }
    }
    this.state = _AuthComponentState.RESET_PASSWORD;
  }

  showResetPassword() {
    this.passwordResetMessage = '';
    this.errorMessage = '';
    this.password = '';
    this.state = _AuthComponentState.RESET_PASSWORD;
  }

  showCreateAccount() {
    this.errorMessage = '';
    this.password = '';
    this.state = _AuthComponentState.CREATE_ACCOUNT;
  }

  showDefaultSignInView() {
    this.errorMessage = '';
    this.password = '';
    this.state = _AuthComponentState.ANONYMOUS;
  }

  closeDialog() {
    this._dialogRef.close();
  }

  signOut() {
    this._auth.signOut();
    this._router.navigate(['']);
    this.closeDialog();
  }
}
