export type LoadingStateType = {
  isLoading: boolean;
};

const initState: LoadingStateType = {
  isLoading: false,
};

export type LoadingAT = ReturnType<typeof loadingAC>;

type actionsType = LoadingAT;

export const loadingReducer = (state = initState, action: actionsType): LoadingStateType => {
  switch (action.type) {
    case 'LOADING': {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    default:
      return state;
  }
};

export const loadingAC = (isLoading: boolean) => ({
  type: 'LOADING' as const,
  isLoading,
});
