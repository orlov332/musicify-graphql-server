import { Injectable } from '@nestjs/common';
import { Favourite, FavouriteType } from './entities/favourite.entity';
import { HttpService } from '@nestjs/axios';
import { pluck } from 'rxjs';
import { SecurityService } from '../security/security.service';

const { FAVOURITES_URL } = process.env;

@Injectable()
export class FavouritesService {
  constructor(
    private readonly httpService: HttpService,
    private readonly securityService: SecurityService,
  ) {}
  private url: string = FAVOURITES_URL;

  getFavorites() {
    return this.httpService
      .get<Favourite>(this.url, {
        headers: this.securityService.getAuthHeaders(),
      })
      .pipe(pluck('data'));
  }

  addFavourite(type: FavouriteType, id: string) {
    return this.httpService
      .put<Favourite>(
        `${this.url}/add`,
        { type, id },
        { headers: this.securityService.getAuthHeaders() },
      )
      .pipe(pluck('data'));
  }

  removeFavourite(type: FavouriteType, id: string) {
    return this.httpService
      .put<Favourite>(
        `${this.url}/remove`,
        { type, id },
        { headers: this.securityService.getAuthHeaders() },
      )
      .pipe(pluck('data'));
  }
}
