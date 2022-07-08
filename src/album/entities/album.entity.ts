export interface Album {
  _id: string;
  name: string;
  released: string;
  artistsIds: string[];
  bandsIds: string[];
  trackIds: string[];
  genresIds: string[];
}
