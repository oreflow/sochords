import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/components/home/home.component';
import { SongComponent } from 'app/components/song/song.component';
import { NewSongComponent } from 'app/components/newsong/newsong.component';
import { EditSongComponent } from 'app/components/editsong/editsong.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'song/:songId', component: SongComponent},
  {path: 'editSong/:songId', component: EditSongComponent},
  {path: 'newSong', component: NewSongComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
