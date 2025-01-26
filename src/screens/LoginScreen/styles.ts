import {StyleSheet} from 'react-native';
import {AppColor} from '<utils>/color';
import {AppFontFamily} from '<utils>/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
  loginContainer: {
    width: '70%',
    marginHorizontal: 'auto',
    marginTop: '50%',
  },
  title: {
    textAlign: 'center',
    color: AppColor.textPrimary,
    fontSize: 30,
    marginTop: 20,
    fontFamily: AppFontFamily.SF.bold,
    marginBottom: 20,
  },
  textInput: {
    fontFamily: AppFontFamily.SF.regular,
    borderWidth: 1,
    borderColor: AppColor.tertiary,
    color: AppColor.textPrimary,
    borderRadius: 20,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  loginButton: {
    width: '100%',
    padding: 10,
    borderRadius: 30,
    marginTop: 30,
    backgroundColor: AppColor.secondary,
  },
  loginText: {
    fontFamily: AppFontFamily.SF.bold,
    textAlign: 'center',
    color: 'white',
  },
});
