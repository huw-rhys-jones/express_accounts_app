import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Front from './front';
import Login from './login'
import NewUser from './create_new_account';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Front">
        <Stack.Screen options={{ headerShown: false }} name="Front" component={Front} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="NewUser" component={NewUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;