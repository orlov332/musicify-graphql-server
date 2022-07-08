export function getParamObject(filter: string) {
  return filter.split('=').reduce((res, _, i, arr) => {
    if (i % 2 === 0) res[arr[i]] = arr[i + 1];
    return res;
  }, {});
}
