import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import InputScreen from './screens/InputScreen';
import ResultScreen from './screens/ResultScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#14488e' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Aplikasi UTS 411222034' }} />
        <Stack.Screen name="Input" component={InputScreen} options={{ title: 'Aplikasi Pencarian Nilai' }} />
        <Stack.Screen name="Result" component={ResultScreen} options={{ title: 'Konfirmasi Hasil Pencarian' }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
