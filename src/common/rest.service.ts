import { pluck } from 'rxjs';
import { getParamObject } from './utils';
import { DeleteResult } from '../graphql.schema';
import { HttpService } from '@nestjs/axios';
import { SecurityService } from '../security/security.service';
import { RestList } from './common.model';

export class RestService<
  T,
  TCreate,
  TUpdate extends { id: string },
  TList = RestList<T>,
> {
  constructor(
    protected url: string,
    protected readonly httpService: HttpService,
    protected readonly securityService: SecurityService,
  ) {}

  findAll(limit: number, offset: number, filter: string) {
    return this.httpService
      .get<TList>(this.url, {
        params: {
          limit,
          offset,
          ...getParamObject(filter),
        },
      })
      .pipe(pluck('data'));
  }

  findOne(id: string) {
    return this.httpService.get<T>(`${this.url}/${id}`).pipe(pluck('data'));
  }

  create(createGenreInput: TCreate) {
    return this.httpService
      .post<T>(this.url, createGenreInput, {
        headers: this.securityService.getAuthHeaders(),
      })
      .pipe(pluck('data'));
  }

  update({ id, ...toUpdate }: TUpdate) {
    return this.httpService
      .put<T>(`${this.url}/${id}`, toUpdate, {
        headers: this.securityService.getAuthHeaders(),
      })
      .pipe(pluck('data'));
  }

  remove(id: string) {
    return this.httpService
      .delete<DeleteResult>(`${this.url}/${id}`, {
        headers: this.securityService.getAuthHeaders(),
      })
      .pipe(pluck('data'));
  }
}
