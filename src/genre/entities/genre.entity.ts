import { RestList } from '../../common/common.model';

export interface GenreRest {
  _id: string;
  name: string;
  description: string;
  country: string;
  year: number;
}

export type GenreListRest = RestList<GenreRest>;
