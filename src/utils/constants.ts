import {AppFont} from './types/color.ts';

const SF: AppFont = {
  bold: 'SF-Pro-Text-Bold',
  medium: 'SF-Pro-Text-Medium',
  regular: 'SF-Pro-Text-Regular',
  semibold: 'SF-Pro-Text-Semibold',
};

export const AppFontFamily = {
  SF,
};

export enum ScreenName {
  LOGIN = 'login_screen',
}

export enum NativeSharedPreferencesKey {
  IS_LOGGED_IN = 'is_logged_in',
  USER_INFO = 'user_info',
}
