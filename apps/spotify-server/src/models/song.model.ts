import { Field, ObjectType } from '@nestjs/graphql';
import { Artist } from './artist.model';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Song {
  @PrimaryGeneratedColumn()
  @Field()
  id: string;

  @Column()
  @Field()
  title: string;

  @Column({ name: 'published_time' })
  @Field()
  publishedTime: Date;

  @Column({ name: 'cover_photo_url' })
  @Field()
  coverPhotoURL: string;

  @Column({ name: 'song_url' })
  @Field()
  songURL: string;

  @Column({ name: 'artist_id' })
  @Field()
  artistId: string;

  @Field((type) => Artist)
  artist?: Artist;
}
