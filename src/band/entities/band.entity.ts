import { RestList } from '../../common/common.model';

interface MemberRest {
  artist: string;
  instrument: string;
  years: string[];
}

export interface BandRest {
  _id: string;
  name: string;
  origin: string;
  members: MemberRest[];
  website: string;
  genresIds: string[];
}

export type BandListRest = RestList<BandRest>;
