import { Injectable } from '@nestjs/common';
import { Favourite, FavouriteType } from './entities/favourite.entity';
import { HttpService } from '@nestjs/axios';
import { pluck } from 'rxjs';

const { FAVOURITES_URL } = process.env;

@Injectable()
export class FavouritesService {
  constructor(private readonly httpService: HttpService) {}
  private url: string = FAVOURITES_URL;

  getFavorites() {
    return this.httpService.get<Favourite>(this.url).pipe(pluck('data'));
  }

  addFavourite(type: FavouriteType, id: string) {
    return this.httpService
      .put<Favourite>(`${this.url}/add`, { type, id })
      .pipe(pluck('data'));
  }

  removeFavourite(type: FavouriteType, id: string) {
    return this.httpService
      .put<Favourite>(`${this.url}/remove`, { type, id })
      .pipe(pluck('data'));
  }
}
