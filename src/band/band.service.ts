import { Injectable } from '@nestjs/common';
import { CreateBandInput } from './dto/create-band.input';
import { UpdateBandInput } from './dto/update-band.input';
import { HttpService } from '@nestjs/axios';
import { SecurityService } from '../security/security.service';
import { BandListRest, BandRest } from './entities/band.entity';
import { getParamObject } from '../common/utils';
import { pluck } from 'rxjs';

const { BAND_URL } = process.env;

@Injectable()
export class BandService {
  constructor(
    private readonly httpService: HttpService,
    private readonly securityService: SecurityService,
  ) {}

  create(createBandInput: CreateBandInput) {
    return 'This action adds a new band';
  }

  findAll(limit: number, offset: number, filter: string) {
    return this.httpService
      .get<BandListRest>(BAND_URL, {
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
      .get<BandRest>(`${BAND_URL}/${id}`)
      .pipe(pluck('data'));
  }

  update(id: number, updateBandInput: UpdateBandInput) {
    return `This action updates a #${id} band`;
  }

  remove(id: number) {
    return `This action removes a #${id} band`;
  }
}
