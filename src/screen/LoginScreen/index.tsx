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

const LoginScreen: React.FC = () => {
  const onLoginHandler = () => {
    Keyboard.dismiss();

    if (
      NativeSharedPreferences.getItem('isLogin') !== 'null' ||
      NativeSharedPreferences.getItem('userInfo') !== 'null'
    ) {
      return;
    }

    NativeSharedPreferences.setItem('isLogin', 'true');
    NativeSharedPreferences.setItem(
      'userInfo',
      JSON.stringify({
        username: 'HEHE',
        profilePricture: 'HAI',
      }),
    );
  };

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
