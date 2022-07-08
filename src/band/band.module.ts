import { Module } from '@nestjs/common';
import { BandService } from './band.service';
import { BandResolver } from './band.resolver';

@Module({
  providers: [BandResolver, BandService]
})
export class BandModule {}
