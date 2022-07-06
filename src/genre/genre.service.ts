import { Injectable } from '@nestjs/common';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { GenreListRest, GenreRest } from './entities/genre.entity';
import axios from 'axios';
import { getParamObject } from '../utils';

const { GENRES_URL } = process.env;

@Injectable()
export class GenreService {
  create(createGenreInput: CreateGenreInput) {
    return 'This action adds a new genre';
  }

  async findAll(
    limit: number,
    offset: number,
    filter: string,
  ): Promise<GenreListRest> {
    return axios
      .get<GenreListRest>(GENRES_URL, {
        params: {
          limit,
          offset,
          ...getParamObject(filter),
        },
      })
      .then((res) => res.data);
  }

  async findOne(id: string) {
    return axios.get<GenreRest>(`${GENRES_URL}/${id}`).then((res) => res.data);
  }

  update(id: number, updateGenreInput: UpdateGenreInput) {
    return `This action updates a #${id} genre`;
  }

  remove(id: number) {
    return `This action removes a #${id} genre`;
  }
}
