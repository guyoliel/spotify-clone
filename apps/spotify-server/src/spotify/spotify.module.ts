import { Module } from '@nestjs/common';
import { ArtistsService } from './artists/artists.service';
import { SongsService } from './songs/songs.service';
import { SongsResolver } from './songs/songs.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [ArtistsService, SongsService, SongsResolver],
})
export class SpotifyModule {}
