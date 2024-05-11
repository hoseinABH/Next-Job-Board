export const createReduxConstant = (prefix: string) => (keyword: string) => `${prefix}/${keyword}`;

export const updateState =
  <T extends object>(initialObj: T) =>
  (incomingObj: Partial<T>): T => ({ ...initialObj, ...incomingObj });
