import { Module } from '@nestjs/common';
import { FavouritesService } from './favourites.service';
import { FavouritesResolver } from './favourites.resolver';
import { HttpModule } from '@nestjs/axios';
import { BandModule } from '../band/band.module';
import { ArtistModule } from '../artist/artist.module';
import { GenreModule } from '../genre/genre.module';
import { TrackModule } from '../track/track.module';

@Module({
  imports: [HttpModule, BandModule, ArtistModule, GenreModule, TrackModule],
  providers: [FavouritesResolver, FavouritesService],
})
export class FavouritesModule {}
