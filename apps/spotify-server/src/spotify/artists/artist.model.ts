import { ObjectType, Field } from '@nestjs/graphql';
import { Song } from '../songs/song.model';

@ObjectType()
export class Artist {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  photoURL: string;

  @Field((type) => [Song])
  songs?: Song[];
}
