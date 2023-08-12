import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistsService } from './artists.service';
import { Artist } from 'src/models/artist.model';
import { ArtistsResolver } from './artists.resolver';
import { SongsModule } from 'src/songs/songs.module';

@Module({
  imports: [TypeOrmModule.forFeature([Artist]), forwardRef(() => SongsModule)],
  controllers: [],
  providers: [ArtistsService, ArtistsResolver],
  exports: [ArtistsService],
})
export class ArtistsModule {}
