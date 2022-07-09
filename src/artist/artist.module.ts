import { Module } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { ArtistResolver } from './artist.resolver';
import { HttpModule } from '@nestjs/axios';
import { BandModule } from '../band/band.module';

@Module({
  imports: [HttpModule, BandModule],
  providers: [ArtistResolver, ArtistService],
  exports: [ArtistService],
})
export class ArtistModule {}
