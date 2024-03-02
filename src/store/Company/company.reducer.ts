/**
 * @module Reducer/Company
 * @desc All Company reducers
 */
import { RESET_FACTORY } from '../index.constants';
// Utilities
import { updateState } from '@/lib/store';
// Types
import type { Reducer } from 'react';
import type { Action } from '@/types/store';
import type { Company, CompanyLoading } from '@/types/company';
// Constants
import * as types from './company.constants';

export interface CompanyState {
  loading: CompanyLoading;
  companies: Company[];
}

export const initialState: CompanyState = {
  loading: {
    getAllCompanies: false,
  },
  companies: [],
};

const reducer: Reducer<CompanyState, Action> = (
  state = initialState,
  action
) => {
  const update = updateState<CompanyState>(state);
  switch (action.type) {
    case types.SET_LOADING:
      return update({
        loading: updateState<CompanyLoading>(state.loading)({
          [action.payload.key]: action.payload.status,
        }),
      });
    case types.SET_COMPANIES:
      return update({
        companies: action.payload,
      });
    case RESET_FACTORY:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
