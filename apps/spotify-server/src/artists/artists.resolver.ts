import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Artist } from 'src/models/artist.model';
import { ArtistsService } from './artists.service';
import { SongsService } from 'src/songs/songs.service';
import { Song } from 'src/models/song.model';

@Resolver((of) => Artist)
export class ArtistsResolver {
  constructor(
    private artistsService: ArtistsService,
    private songsService: SongsService,
  ) {}
  @Query((returns) => Artist)
  async artist(
    @Args('id', { type: () => String }) artistId: string,
  ): Promise<Artist> {
    return this.artistsService.findOneById(artistId);
  }

  @ResolveField((returns) => [Song])
  async songs(@Parent() artist: Artist): Promise<Song[]> {
    const { id } = artist;
    return this.songsService.findAllByArtistId(id);
  }
}
