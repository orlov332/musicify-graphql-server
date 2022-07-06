import { RestList } from './common.model';
import { List } from './graphql.schema';

export function getParamObject(filter: string) {
  return filter.split('=').reduce((res, _, i, arr) => {
    if (i % 2 === 0) res[arr[i]] = arr[i + 1];
    return res;
  }, {});
}

export function restListToGraph<
  L extends RestList<A>,
  A extends { _id: string },
>({ items, ...res }: L): List & { items: ({ id: string } & Omit<A, '_id'>)[] } {
  return {
    items: items.map(restEntityToGraph),
    ...res,
  };
}

export function restEntityToGraph<E extends { _id: string }>({
  _id,
  ...common
}: E): { id: string } & Omit<E, '_id'> {
  return {
    id: _id,
    ...common,
  };
}
