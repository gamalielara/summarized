/**
 * Works in Android only
 * Connects Android's Room Database with React Native
 */
import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  getMonthCatalogs(month: string): Promise<string>;

  addDailyCatalog(catalog: string): Promise<void>;

  getDailyCatalog(date: string): Promise<string>;

  deleteDailyCatalog(id: string): Promise<void>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeLocalDatabase');
