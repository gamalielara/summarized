import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './styles.ts';
import NativeSharedPreferences from '<utils>/specs/NativeSharedPreferences';
import {useNavigation} from '@react-navigation/native';
import {NativeSharedPreferencesKey, ScreenName} from '<utils>/constants.ts';
import {useEffect} from 'react';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();

  const onLoginHandler = () => {
    Keyboard.dismiss();

    NativeSharedPreferences.setItem(
      NativeSharedPreferencesKey.IS_LOGGED_IN,
      'true',
    );
    NativeSharedPreferences.setItem(
      NativeSharedPreferencesKey.USER_INFO,
      JSON.stringify({
        username: 'HEHE',
        profilePricture: 'HAI',
      }),
    );

    navigation.navigate(ScreenName.HOME);
  };

  useEffect(() => {
    if (
      NativeSharedPreferences.getItem(
        NativeSharedPreferencesKey.IS_LOGGED_IN,
      ) !== 'null' ||
      NativeSharedPreferences.getItem(NativeSharedPreferencesKey.USER_INFO) !==
        'null'
    ) {
      navigation.navigate(ScreenName.HOME);
    }
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.loginContainer}>
          <Text style={styles.title}>...summarized.</Text>
          <TextInput
            style={styles.textInput}
            numberOfLines={1}
            placeholder={'Enter your email'}
            inputMode="email"
          />
          <TextInput
            style={styles.textInput}
            numberOfLines={1}
            placeholder={'Enter your password'}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.loginButton} onPress={onLoginHandler}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
