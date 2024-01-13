import type { CommonState } from '@/store/Common/common.reducer';

export interface StateNetwork {
  common: CommonState;
}

export interface Action<P = any> {
  type: string;
  payload?: P;
}

export interface ExtraActionInfo {
  sagas: boolean | undefined;
}
