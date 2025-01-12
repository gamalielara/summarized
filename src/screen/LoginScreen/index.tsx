import {Text, View} from 'react-native';
import {APP_FONT_FAMILY} from '../../utils/constants.ts';

const LoginScreen: React.FC = () => {
  return (
    <View>
      <Text style={{fontFamily: APP_FONT_FAMILY.SF.semibold, fontSize: 20}}>Midnights</Text>
    </View>
  );
};

export default LoginScreen;
