import {StyleSheet} from 'react-native';
import {AppColor} from '<utils>/color.ts';
import {AppFontFamily} from '<utils>/constants';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
    marginVertical: 1,
  },
  dateCircle: {
    borderRadius: '100%',
    aspectRatio: 1,
    width: '15%',
    backgroundColor: AppColor.tertiary,
    marginRight: 5,
    justifyContent: 'center',
  },
  dateVerticalLine: {
    width: 3,
    height: '100%',
    backgroundColor: AppColor.tertiary,
    position: 'absolute',
    top: '50%',
    left: '9%',
    transform: 'translate(-50%, 0)',
  },
  dateText: {
    color: AppColor.textSecondary,
    fontFamily: AppFontFamily.SF.bold,
    textAlign: 'center',
  },
  boxContainer: {
    minHeight: 50,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    minWidth: 0,
    maxWidth: '80%',
    backgroundColor: AppColor.tertiary,
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
  dayCatalogDetail: {
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
  horizontalDividerLine: {
    backgroundColor: AppColor.secondary,
    height: 2,
    width: '90%',
    marginTop: 10,
    marginHorizontal: 'auto',
    opacity: 0.3,
  },
  descriptionTitleText: {
    fontSize: 16,
    fontFamily: AppFontFamily.SF.bold,
    color: AppColor.textSecondary,
    marginTop: 5,
  },
  descriptionText: {
    fontSize: 14,
    fontFamily: AppFontFamily.SF.regular,
    color: AppColor.textSecondary,
    marginTop: 2,
  },
});
