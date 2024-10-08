export interface Action<P = any> {
  type: string;
  payload?: P;
}

export interface ExtraActionInfo {
  sagas: boolean | undefined;
}
