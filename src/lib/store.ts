export const createReduxConstant = (prefix: string) => (keyword: string) =>
  `${prefix}/${keyword}`;
