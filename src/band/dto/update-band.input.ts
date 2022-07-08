import { CreateBandInput } from './create-band.input';

export interface UpdateBandInput extends Partial<CreateBandInput> {
  id: string;
}
