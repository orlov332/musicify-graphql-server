import { Injectable } from '@nestjs/common';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';
import { RestService } from '../common/rest.service';
import { HttpService } from '@nestjs/axios';
import { SecurityService } from '../security/security.service';
import { Album } from './entities/album.entity';

const { ALBUMS_URL } = process.env;

@Injectable()
export class AlbumService extends RestService<
  Album,
  CreateAlbumInput,
  UpdateAlbumInput
> {
  constructor(httpService: HttpService, securityService: SecurityService) {
    super(ALBUMS_URL, httpService, securityService);
  }
}
