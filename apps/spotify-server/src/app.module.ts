import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';

import { ArtistsModule } from './artists/artists.module';
import { SongsModule } from './songs/songs.module';
import { Song } from './models/song.model';
import { Artist } from './models/artist.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'spotify',
      synchronize: false,
      entities: [Song, Artist],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      driver: ApolloDriver,
    }),
    ArtistsModule,
    SongsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
