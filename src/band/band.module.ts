import { Module } from '@nestjs/common';
import { BandService } from './band.service';
import { BandResolver } from './band.resolver';
import { HttpModule } from '@nestjs/axios';
import { GenreModule } from '../genre/genre.module';

@Module({
  imports: [HttpModule, GenreModule],
  providers: [BandResolver, BandService],
  exports: [BandService],
})
export class BandModule {}
