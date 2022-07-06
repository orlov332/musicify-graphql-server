import { RestList } from '../../common.model';

export interface GenreRest {
  _id: string;
  name: string;
  description: string;
  country: string;
  year: string;
}

export type GenreListRest = RestList<GenreRest>;
