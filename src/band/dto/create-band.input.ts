import { Band } from '../entities/band.entity';

export type CreateBandInput = Omit<Band, '_id'>;
