export type ThemeType = 'some' | 'red' | 'dark';

export type ThemeStateType = {
  currentTheme: ThemeType;
};

type ChangeThemeAT = ReturnType<typeof changeThemeAC>


const initState: ThemeStateType = {
  currentTheme: 'some',
};

export const themeReducer = (state: ThemeStateType = initState, action: ChangeThemeAT): ThemeStateType => {
  switch (action.type) {
    case 'CHANGE-THEME': {
      return {
        ...state,
        currentTheme: action.theme
      }
    }
    default:
      return state;
  }
};

export const changeThemeAC = (theme: ThemeType) => ({
  type: 'CHANGE-THEME' as const,
  theme
});
