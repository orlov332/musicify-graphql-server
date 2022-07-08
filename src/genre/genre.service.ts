import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { SecurityService } from '../security/security.service';
import { RestService } from '../common/rest.service';
import { GenreRest } from './entities/genre.entity';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';

const { GENRES_URL } = process.env;

@Injectable()
export class GenreService extends RestService<
  GenreRest,
  CreateGenreInput,
  UpdateGenreInput
> {
  constructor(httpService: HttpService, securityService: SecurityService) {
    super(GENRES_URL, httpService, securityService);
  }
}
