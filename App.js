// require('node-libs-expo/globals');
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { LogBox } from 'react-native';

import Navigation from './navigation';
// import useCachedResources from './hooks/useCachedResources';
// import { StoreProvider } from './hooks/useStoreContext';
// import './util/i18n';
export default function App() {
  // LogBox.ignoreLogs(['Warning']);

  // const {isLoadingComplete, initialRoute} = useCachedResources();

  // if (!isLoadingComplete) {
  //   return null;
  // } else {
    return (
      // <StoreProvider>
        <SafeAreaProvider>
          <Navigation initialRouteName={"Login"}/>
          <StatusBar />
        </SafeAreaProvider>
      // </StoreProvider>
    );
  // }
}
