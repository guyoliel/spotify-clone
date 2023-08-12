import { ObjectType, Field } from '@nestjs/graphql';
import { Song } from './song.model';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Artist {
  @PrimaryGeneratedColumn()
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column({ name: 'photo_url' })
  @Field()
  photoURL: string;

  @Field((type) => [Song])
  songs?: Song[];
}
