import {StyleSheet} from 'react-native';
import {AppColor} from '<utils>/color.ts';
import {AppFontFamily} from '<utils>/constants';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  dateCircle: {
    borderRadius: '100%',
    aspectRatio: 1,
    width: '15%',
    backgroundColor: AppColor.tertiary,
    marginRight: 5,
    justifyContent: 'center',
  },
  dateHorizontalLine: {
    width: 3,
    height: '120%',
    backgroundColor: AppColor.tertiary,
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translate(-50%, 0)',
  },

  dateText: {
    color: AppColor.textSecondary,
    fontFamily: AppFontFamily.SF.bold,
    textAlign: 'center',
  },
  container: {
    backgroundColor: AppColor.tertiary,
    minHeight: 50,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    minWidth: 0,
    maxWidth: '80%',
  },
  dateTitle: {
    color: AppColor.textSecondary,
    fontFamily: AppFontFamily.SF.bold,
    fontSize: 16,
  },
  dayDetailContainer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  dayDetail: {
    marginHorizontal: 10,
  },
  moodText: {
    color: AppColor.textSecondary,
    fontFamily: AppFontFamily.SF.bold,
    fontSize: 18,
  },
  habitText: {
    color: AppColor.textSecondary,
    fontFamily: AppFontFamily.SF.regular,
    width: '50%',
  },
});
