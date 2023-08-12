import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Artist } from 'src/models/artist.model';
import { Repository } from 'typeorm';
@Injectable()
export class ArtistsService {
  constructor(
    @InjectRepository(Artist) private artistsRepo: Repository<Artist>,
  ) {}
  async findOneById(artistId: string): Promise<Artist> {
    return this.artistsRepo.findOneBy({ id: artistId });
  }
}
