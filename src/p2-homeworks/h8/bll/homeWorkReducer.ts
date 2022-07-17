import { UserType } from '../HW8';

export type SortActionType = {
  type: 'sort';
  payload: 'up' | 'down';
};

export type CheckActionType = {
  type: 'check';
  payload: number;
};

type ActionsType = SortActionType | CheckActionType;

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => {
  // need to fix any
  switch (action.type) {
    case 'sort': {
      return [...state].sort((prev, next) => (action.payload === 'up' ? next.age - prev.age : prev.age - next.age));
    }
    case 'check': {
      return state.filter((user) => user.age >= action.payload);
    }
    default:
      return state;
  }
};
