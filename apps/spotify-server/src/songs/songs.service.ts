import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from 'src/models/song.model';
import { Repository } from 'typeorm';
@Injectable()
export class SongsService {
  constructor(@InjectRepository(Song) private songsRepo: Repository<Song>) {}

  async findOneById(id: string): Promise<Song> {
    return this.songsRepo.findOneBy({ id });
  }
}
