import { CreateTrackInput } from './create-track.input';

export interface UpdateTrackInput extends Partial<CreateTrackInput> {
  id: string;
}
