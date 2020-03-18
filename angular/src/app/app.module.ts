
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from 'app/appcomponent/app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'environments/environment';

import { ChordSectionComponent } from 'app/components/chordsection/chordsection.component';
import { EditSongComponent } from 'app/components/editsong/editsong.component';
import { ErrorComponent } from 'app/components/error/error.component';
import { HomeComponent } from 'app/components/home/home.component';
import { NewSongComponent } from 'app/components/newsong/newsong.component';
import { TabSectionComponent } from 'app/components/tabsection/tabsection.component';
import { SongComponent } from 'app/components/song/song.component';

import { AutoWidthDirective } from 'app/directives/autowidth.directive';
import { ColSpanDirective } from 'app/directives/colspan.directive';
import { ReadOnlyDirective } from 'app/directives/readonly.directive';

import 'firebase/firestore';

@NgModule({
  declarations: [
    // Components.
    AppComponent,
    ChordSectionComponent,
    EditSongComponent,
    ErrorComponent,
    HomeComponent,
    NewSongComponent,
    TabSectionComponent,
    SongComponent,
    // Directives.
    AutoWidthDirective,
    ColSpanDirective,
    ReadOnlyDirective,
  ],
  imports: [
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
