import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistsService } from './artists.service';
import { Artist } from 'src/models/artist.model';

@Module({
  imports: [TypeOrmModule.forFeature([Artist])],
  controllers: [],
  providers: [ArtistsService],
  exports: [ArtistsService],
})
export class ArtistsModule {}
