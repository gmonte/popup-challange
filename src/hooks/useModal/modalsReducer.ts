import { Reducer } from 'react';

export const CREATE_MODAL = 'CREATE_MODAL';
export const CREATE_IMMEDIATELY_MODAL = 'CREATE_IMMEDIATELY_MODAL';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const REMOVE_MODAL = 'REMOVE_MODAL';
export const RESET_MODALS = 'RESET_MODALS';

import { IModal, Action } from './types';

export const modalsReducer: Reducer<IModal[], Action> = (modals, action) => {
  switch (action.type) {
    case CREATE_IMMEDIATELY_MODAL:
      return [
        ...modals,
        {
          ...action.modal,
          open: true,
        },
      ].reduce(
        (acc, modal) => {
          if (acc.find(item => modal.id === item.id)) {
            return acc
          }
          return [...acc, modal]
        },
        [] as IModal[]
      )
    
    case CREATE_MODAL:
      return [
        ...modals,
        {
          ...action.modal,
          open: false,
        },
      ].reduce(
        (acc, modal) => {
          if (acc.find(item => modal.id === item.id)) {
            return acc
          }
          return [...acc, modal]
        },
        [] as IModal[]
      )
    
    case OPEN_MODAL:
      return modals.map(modal => {
        if (modal.id === action.modal.id) {
          return { ...modal, open: true };
        }
        return modal;
      });

    case CLOSE_MODAL:
      return modals.map(modal => {
        if (modal.id === action.modal.id) {
          return { ...modal, open: false };
        }
        return modal;
      });

    case REMOVE_MODAL:
      return modals.filter(modal => modal.id !== action.modal.id);

    case RESET_MODALS:
      return [];

    default:
      return modals;
  }
};
