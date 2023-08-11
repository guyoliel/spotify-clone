import { Controller, Get } from '@nestjs/common';

@Controller('spotify')
export class SpotifyController {
  @Get()
  findAll(): string {
    return 'This action returns all songs';
  }
}
