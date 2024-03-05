/**
 * @module Reducer/Panel
 * @desc All Panel reducers
 */
import { RESET_FACTORY } from '../index.constants';
// Utilities
import { updateState } from '@/lib/store';
// Types
import type { Reducer } from 'react';
import type { Action } from '@/types/store';
import type { PanelLoading, PanelModals } from '@/types/panel';
// Constants
import * as types from './panel.constants';

export interface PanelState {
  loading: PanelLoading;
  modals: PanelModals;
}

export const initialState: PanelState = {
  loading: {
    getAllPositions: false,
  },
  modals: {
    createPosition: false,
  },
};

const reducer: Reducer<PanelState, Action> = (state = initialState, action) => {
  const update = updateState<PanelState>(state);
  switch (action.type) {
    case types.SET_LOADING:
      return update({
        loading: updateState<PanelLoading>(state.loading)({
          [action.payload.key]: action.payload.status,
        }),
      });
    case types.SET_OPEN_MODAL:
      return update({
        modals: updateState<PanelModals>(state.modals)({
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
