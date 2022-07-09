import { Injectable } from '@nestjs/common';
import { CreateArtistInput } from './dto/create-artist.input';
import { UpdateArtistInput } from './dto/update-artist.input';
import { RestService } from '../common/rest.service';
import { HttpService } from '@nestjs/axios';
import { SecurityService } from '../security/security.service';
import { Artist } from './entities/artist.entity';

const { ARTISTS_URL } = process.env;

@Injectable()
export class ArtistService extends RestService<
  Artist,
  CreateArtistInput,
  UpdateArtistInput
> {
  constructor(httpService: HttpService, securityService: SecurityService) {
    super(ARTISTS_URL, httpService, securityService);
  }
}
