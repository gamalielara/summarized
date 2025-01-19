import {StyleSheet} from 'react-native';
import {AppColor} from '<utils>/color.ts';
import {AppFontFamily} from '<utils>/constants.ts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
  thisMonthHeadingText: {
    textAlign: 'center',
    color: AppColor.textPrimary,
    fontSize: 25,
    fontFamily: AppFontFamily.SF.bold,
  },
  monthHeaderPickerContainer: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
