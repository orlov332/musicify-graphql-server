export interface Favourite {
  _id: string;
  userId: string;
  bandsIds: string[];
  genresIds: string[];
  artistsIds: string[];
  tracksIds: string[];
}

export type FavouriteType = 'bands' | 'genres' | 'artists' | 'tracks';
