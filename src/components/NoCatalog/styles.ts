import { AppFontFamily } from "<utils>/constants";
import { AppColor } from "<utils>/constants/color";
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noCatalogText: {
    color: AppColor.textSecondary,
    fontFamily: AppFontFamily.SF.bold,
    textAlign: 'center',
    fontSize: 30,
  },
  noCatalogIllustrationWrapper: {
    width: '75%',
    aspectRatio: 1
  }
});
