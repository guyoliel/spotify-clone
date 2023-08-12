import { Injectable } from '@nestjs/common';
import { Song } from './song.model';

@Injectable()
export class SongsService {
  findOneById(id: string): Song {
    return {
      id: '9a489849-cc32-45d8-92d1-560d332a91f6',
      title: "Don't Blame Me",
      songURL: '',
      coverPhotoURL:
        'https://i.scdn.co/image/ab67616d00001e02da5d5aeeabacacc1263c0f4b',
      publishedTime: new Date('2017-10-11'),
      artistId: '6dd1bb5d-23f4-4cce-a31f-71fbf37941a3',
    };
  }
}
