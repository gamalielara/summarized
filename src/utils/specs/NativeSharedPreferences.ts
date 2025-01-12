import {TurboModule, TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  clearItem: (key: string) => void;
  clearAll: () => void;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
  'NativeSharedPreferences',
);
