import { Injectable } from '@nestjs/common';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { GenreListRest, GenreRest } from './entities/genre.entity';
import { getParamObject } from '../common/utils';
import { HttpService } from '@nestjs/axios';
import { SecurityService } from '../security/security.service';
import { DeleteResult } from '../graphql.schema';
import { Observable, pluck } from 'rxjs';

const { GENRES_URL } = process.env;

@Injectable()
export class GenreService {
  constructor(
    private readonly httpService: HttpService,
    private readonly securityService: SecurityService,
  ) {}

  create(createGenreInput: CreateGenreInput) {
    return this.httpService
      .post<GenreRest>(GENRES_URL, createGenreInput, {
        headers: this.securityService.getAuthHeaders(),
      })
      .pipe(pluck('data'));
  }

  findAll(
    limit: number,
    offset: number,
    filter: string,
  ): Observable<GenreListRest> {
    return this.httpService
      .get<GenreListRest>(GENRES_URL, {
        params: {
          limit,
          offset,
          ...getParamObject(filter),
        },
      })
      .pipe(pluck('data'));
  }

  findOne(id: string) {
    return this.httpService
      .get<GenreRest>(`${GENRES_URL}/${id}`)
      .pipe(pluck('data'));
  }

  update({ id, ...toUpdate }: UpdateGenreInput) {
    return this.httpService
      .put<GenreRest>(`${GENRES_URL}/${id}`, toUpdate, {
        headers: this.securityService.getAuthHeaders(),
      })
      .pipe(pluck('data'));
  }

  remove(id: string) {
    return this.httpService
      .delete<DeleteResult>(`${GENRES_URL}/${id}`, {
        headers: this.securityService.getAuthHeaders(),
      })
      .pipe(pluck('data'));
  }
}
