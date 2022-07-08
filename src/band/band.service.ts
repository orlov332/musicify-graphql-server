import { Injectable } from '@nestjs/common';
import { CreateBandInput } from './dto/create-band.input';
import { UpdateBandInput } from './dto/update-band.input';
import { HttpService } from '@nestjs/axios';
import { SecurityService } from '../security/security.service';
import { BandRest } from './entities/band.entity';
import { RestService } from '../common/rest.service';

const { BANDS_URL } = process.env;

@Injectable()
export class BandService extends RestService<
  BandRest,
  CreateBandInput,
  UpdateBandInput
> {
  constructor(httpService: HttpService, securityService: SecurityService) {
    super(BANDS_URL, httpService, securityService);
  }
}
