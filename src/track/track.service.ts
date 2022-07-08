import { Injectable } from '@nestjs/common';
import { CreateTrackInput } from './dto/create-track.input';
import { UpdateTrackInput } from './dto/update-track.input';
import { RestService } from '../common/rest.service';
import { HttpService } from '@nestjs/axios';
import { SecurityService } from '../security/security.service';
import { Track } from './entities/track.entity';

const { TRACKS_URL } = process.env;

@Injectable()
export class TrackService extends RestService<
  Track,
  CreateTrackInput,
  UpdateTrackInput
> {
  constructor(httpService: HttpService, securityService: SecurityService) {
    super(TRACKS_URL, httpService, securityService);
  }
}
