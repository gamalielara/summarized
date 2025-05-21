import {ActivityIndicator, View} from 'react-native';

const AppLoading = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <ActivityIndicator size="large" />
  </View>
);

export default AppLoading;
