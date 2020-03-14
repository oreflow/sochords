import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SongComponent } from './components/song/song.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'songs/:songId', component: SongComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
