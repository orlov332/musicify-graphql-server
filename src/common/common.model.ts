export interface RestList<T = any> {
  items: T[];
  limit: number;
  offset: number;
  total: number;
}

export interface DeleteResult {
  acknowledged: boolean;
  deletedCount: number;
}
