import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Artist } from 'src/models/artist.model';
import { Song } from 'src/models/song.model';
import { ArtistsService } from 'src/artists/artists.service';
import { SongsService } from './songs.service';

@Resolver((of) => Song)
export class SongsResolver {
  constructor(
    private songsService: SongsService,
    private artistsService: ArtistsService,
  ) {}

  @Query((returns) => Song)
  async song(@Args('id', { type: () => String }) id: string): Promise<Song> {
    return this.songsService.findOneById(id);
  }

  @Query((returns) => [Song])
  async songs(): Promise<Song[]> {
    return this.songsService.findAll();
  }

  @ResolveField()
  async artist(@Parent() song: Song): Promise<Artist> {
    const { artistId } = song;
    return this.artistsService.findOneById(artistId);
  }
}
