import {Appearance} from 'react-native';
import {ColorScheme} from 'src/utils/types/color.ts';

const LIGHT_COLOR_SCHEME: ColorScheme = {
  primary: '#76a2b7',
  secondary: '#698998',
  background: '#F1F0E8', // primary color
  tertiary: '#b1c3cb',
  textPrimary: '#96B6C5',
  textSecondary: '#445c67', // darker
};

const DARK_COLOR_SCHEME: ColorScheme = {
  primary: '#404258',
  secondary: '#606b95',
  tertiary: '#50577A',
  background: '#404258', // primary color
  textPrimary: '#F4F4F2',
  textSecondary: '#9ba1bc', // lighter
};

export const AppColor =
  Appearance.getColorScheme() === 'light'
    ? LIGHT_COLOR_SCHEME
    : DARK_COLOR_SCHEME;
