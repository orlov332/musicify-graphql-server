import { ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { GenreListRest, GenreRest } from './entities/genre.entity';
import { getParamObject } from '../utils';
import { HttpService } from '@nestjs/axios';
import { REQUEST } from '@nestjs/core';

const { GENRES_URL } = process.env;

@Injectable()
export class GenreService {
  constructor(
    private readonly httpService: HttpService,
    @Inject(REQUEST) private request,
  ) {}

  async create(createGenreInput: CreateGenreInput) {
    console.log(this.request.req.headers);
    return this.httpService
      .post<GenreRest>(GENRES_URL, createGenreInput, {
        headers: { authorization: this.request.req.headers.authorization },
      })
      .toPromise()
      .then((res) => res.data);
  }

  async findAll(
    limit: number,
    offset: number,
    filter: string,
  ): Promise<GenreListRest> {
    return this.httpService
      .get<GenreListRest>(GENRES_URL, {
        params: {
          limit,
          offset,
          ...getParamObject(filter),
        },
      })
      .toPromise()
      .then((res) => res.data);
  }

  async findOne(id: string) {
    return this.httpService
      .get<GenreRest>(`${GENRES_URL}/${id}`)
      .toPromise()
      .then((res) => res.data);
  }

  update(id: number, updateGenreInput: UpdateGenreInput) {
    return `This action updates a #${id} genre`;
  }

  remove(id: number) {
    return `This action removes a #${id} genre`;
  }
}
