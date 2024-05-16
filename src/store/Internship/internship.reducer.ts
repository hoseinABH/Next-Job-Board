/**
 * @module Reducer/Internship
 * @desc All Internship reducers
 */
import { RESET_FACTORY } from '../index.constants';
// Utilities
import { updateState } from '@/lib/store';
// Types
import type { Reducer } from 'react';
import type { Action } from '@/types/store';
import type { InternshipsModal } from '@/types/internship';
// Constants
import * as types from './internship.constants';

export interface InternshipsState {
  modals: InternshipsModal;
}

export const initialState: InternshipsState = {
  modals: {
    filter: false,
    internshipApplication: false,
  },
};

const reducer: Reducer<InternshipsState, Action> = (state = initialState, action) => {
  const update = updateState<InternshipsState>(state);
  switch (action.type) {
    case types.SET_OPEN_MODAL:
      return update({
        modals: updateState<InternshipsModal>(state.modals)({
          [action.payload.key]: action.payload.open,
        }),
      });
    case RESET_FACTORY:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
