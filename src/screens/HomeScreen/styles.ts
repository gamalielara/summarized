import {StyleSheet} from 'react-native';
import {AppColor} from '<utils>/color.ts';
import {AppFontFamily} from '<utils>/constants';

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
  catalogWrapper: {
    paddingHorizontal: 5,
    marginTop: 30,
    width: '100%',
  },
  floatingAddButton: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: AppColor.secondary,
    position: 'absolute',
    bottom: 10,
    right: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
