import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongsService } from './songs.service';
import { SongsResolver } from './songs.resolver';
import { ArtistsModule } from 'src/artists/artists.module';
import { Song } from 'src/models/song.model';

@Module({
  imports: [TypeOrmModule.forFeature([Song]), forwardRef(() => ArtistsModule)],
  controllers: [],
  providers: [SongsService, SongsResolver],
  exports: [SongsService],
})
export class SongsModule {}
