import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Artist } from 'src/spotify/artists/artist.model';
import { Song } from 'src/spotify/songs/song.model';
import { ArtistsService } from '../artists/artists.service';
import { SongsService } from './songs.service';

@Resolver((of) => Song)
export class SongsResolver {
  constructor(
    private songsService: SongsService,
    private artistsService: ArtistsService,
  ) {}

  @Query((returns) => Song)
  async song(@Args('id', { type: () => String }) id: string) {
    return this.songsService.findOneById(id);
  }

  @ResolveField()
  async artist(@Parent() artist: Artist): Promise<Artist> {
    const { id } = artist;
    return this.artistsService.findOneById(id);
  }
}
