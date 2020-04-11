import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { TrackComponent } from './track/track.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AboutComponent,
    TrackComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
