import { BandRest } from '../entities/band.entity';

export type CreateBandInput = Omit<BandRest, '_id'>;
