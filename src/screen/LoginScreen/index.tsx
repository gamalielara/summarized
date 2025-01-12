import {Text, View} from 'react-native';
import {APP_FONT_FAMILY} from '../../utils/constants.ts';
import {useEffect} from 'react';
import NativeSharedPreferences from '../../utils/specs/NativeSharedPreferences.ts';

const LoginScreen: React.FC = () => {
  useEffect(() => {
    console.log('HAI EFFECT ', NativeSharedPreferences.getItem('HAI'));
  }, []);

  return (
    <View>
      <Text style={{fontFamily: APP_FONT_FAMILY.SF.semibold, fontSize: 20}}>
        Midnights
      </Text>
    </View>
  );
};

export default LoginScreen;
