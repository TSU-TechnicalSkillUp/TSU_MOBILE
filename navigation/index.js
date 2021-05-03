import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import LinkingConfiguration from './LinkingConfiguration';

// import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// import {useTranslation} from 'react-i18next';
import {
  HomeScreen,
  BlogScreen,
  LoginScreen,
  SignupScreen,
  NewsFeedScreen,
} from '../screen';
export default function Navigation(props) {
  const { initialRouteName } = props;

  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator initialRouteName={initialRouteName} />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();
// const WalletStack = createStackNavigator();
// const SettingStack = createStackNavigator();
// const BottomTab = createBottomTabNavigator();

// function TabBarIcon(props) {
//   return <Ionicons size={24} style={{ marginBottom: 0 }} {...props} />;
// }

// const BottomTabNavigator = () => {
//   const {t} = useTranslation();
//   return (
//     <BottomTab.Navigator
//       screenOptions={{ headerShown: false }}
//       tabBarOptions={{ activeTintColor: '#0036AF', inactiveTintColor: '#000000', tabStyle: { safeAreaInsets: 40 } }}
//       initialRouteName={'Wallet'}
//     >
//       <BottomTab.Screen
//         name="Wallet"
//         component={WalletNavigator}
//         options={{
//           tabBarLabel: t('button.wallet'),
//           tabBarIcon: ({ color }) => <TabBarIcon name="grid" color={color} />,
//         }}
//       />
//       <BottomTab.Screen
//         name="Camera"
//         component={CameraScreen}
//         options={{
//           tabBarLabel: t('button.camera'),
//           tabBarIcon: ({ color }) => <MaterialCommunityIcons name="qrcode-scan" color={color} size={24} style={{ marginBottom: 0 }} />,
//           unmountOnBlur: true,
//         }}
//       />
//       <BottomTab.Screen
//         name="Setting"
//         component={SettingNavigator}
//         options={{
//           tabBarLabel: t('button.setting'),
//           tabBarIcon: ({ color }) => <TabBarIcon size={36} name="menu" color={color} />,
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// };

// const WalletNavigator = () => {
//   return (
//     <WalletStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Home'}>
//       <Stack.Screen name="Home" component={HomeScreen} />
//     </WalletStack.Navigator>
//   );
// };

// const SettingNavigator = () => {
//   return (
//     <SettingStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Main'}>
//       <SettingStack.Screen name="Setting" component={SettingScreen} />
//     </SettingStack.Navigator>
//   );
// };

const RootNavigator = (props) => {
  const { initialRouteName } = props;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Login"}>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Blog" component={BlogScreen} /> */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      {/* <Stack.Screen name="NewsFeed" component={NewsFeedScreen} /> */}
    </Stack.Navigator>
  );
};
