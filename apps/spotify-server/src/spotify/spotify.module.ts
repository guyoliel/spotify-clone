import { Module } from '@nestjs/common';
import { SpotifyController } from './spotify.controller';

@Module({
  imports: [],
  controllers: [SpotifyController],
  providers: [],
})
export class SpotifyModule {}
