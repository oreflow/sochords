import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from 'app/appcomponent/app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'environments/environment';

import { AuthComponent } from './components/auth/auth.component';
import { ChordExplorerComponent } from 'app/components/chordexplorer/chordexplorer.component';
import { ChordPrintComponent } from 'app/components/chordprint/chordprint.component';
import { ChordSectionComponent } from 'app/components/chordsection/chordsection.component';
import { ChordSidenavComponent } from 'app/components/chordsidenav/chordsidenav.component';
import { EditSongComponent } from 'app/components/editsong/editsong.component';
import { ErrorComponent } from 'app/components/error/error.component';
import { HomeComponent } from 'app/components/home/home.component';
import { NewSongComponent } from 'app/components/newsong/newsong.component';
import { TabSectionComponent } from 'app/components/tabsection/tabsection.component';
import { StrummingPatternComponent } from 'app/components/strummingpattern/strummingpattern.component';
import { SongComponent } from 'app/components/song/song.component';

import { AutoWidthDirective } from 'app/directives/autowidth.directive';
import { ColSpanDirective } from 'app/directives/colspan.directive';
import { ReadOnlyDirective } from 'app/directives/readonly.directive';

import 'firebase/firestore';
import 'firebase/storage';

@NgModule({
  declarations: [
    // Components.
    AppComponent,
    AuthComponent,
    ChordExplorerComponent,
    ChordPrintComponent,
    ChordSectionComponent,
    ChordSidenavComponent,
    EditSongComponent,
    ErrorComponent,
    HomeComponent,
    NewSongComponent,
    TabSectionComponent,
    StrummingPatternComponent,
    SongComponent,
    // Directives.
    AutoWidthDirective,
    ColSpanDirective,
    ReadOnlyDirective,
  ],
  imports: [
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    TextFieldModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
