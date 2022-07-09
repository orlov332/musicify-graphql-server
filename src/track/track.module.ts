import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackResolver } from './track.resolver';
import { HttpModule } from '@nestjs/axios';
import { BandModule } from '../band/band.module';
import { GenreModule } from '../genre/genre.module';
import { ArtistModule } from '../artist/artist.module';

@Module({
  imports: [HttpModule, BandModule, GenreModule, ArtistModule],
  providers: [TrackResolver, TrackService],
  exports: [TrackService],
})
export class TrackModule {}
