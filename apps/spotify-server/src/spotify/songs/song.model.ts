import { Field, ObjectType } from '@nestjs/graphql';
import { Artist } from '../artists/artist.model';

@ObjectType()
export class Song {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field({ name: 'published_time' })
  publishedTime: Date;

  @Field({ name: 'cover_photo_url' })
  coverPhotoURL: string;

  @Field({ name: 'song_url' })
  songURL: string;

  @Field((type) => Artist)
  artist?: Artist;

  @Field()
  artistId: string;
}
