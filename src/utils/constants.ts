import {AppFont, ColorScheme} from './types/color.ts';

export const LIGHT_COLOR_SCHEME: ColorScheme = {
  primary: '#76a2b7',
  secondary: '#698998',
  backgroundPrimary: '#F1F0E8', // primary color
  backgroundSecondary: '#b1c3cb',
  textPrimary: '#96B6C5',
  textSecondary: '#445c67', // darker
};

export const DARK_COLOR_SCHEME: ColorScheme = {
  primary: '#404258',
  secondary: '#3c435d',
  backgroundSecondary: '#50577A',
  backgroundPrimary: '#404258', // primary color
  textPrimary: '#F4F4F2',
  textSecondary: '#6B728E', // lighter
};

const SF: AppFont = {
  bold: 'SF-Pro-Text-Bold',
  medium: 'SF-Pro-Text-Medium',
  regular: 'SF-Pro-Text-Regular',
  semibold: 'SF-Pro-Text-Semibold',
};

export const APP_FONT_FAMILY = {
  SF,
};
