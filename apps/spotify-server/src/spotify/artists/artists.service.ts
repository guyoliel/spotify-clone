import { Injectable } from '@nestjs/common';
import { Artist } from './artist.model';

@Injectable()
export class ArtistsService {
  findOneById(artistId: string): Artist {
    return {
      id: '6dd1bb5d-23f4-4cce-a31f-71fbf37941a3',
      name: 'Taylor Swift',
      photoURL:
        'https://i.scdn.co/image/ab676161000051746a224073987b930f99adc706',
    };
  }
}
