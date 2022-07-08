export interface RestList<T = any> {
  items: T[];
  limit: number;
  offset: number;
  total: number;
}
