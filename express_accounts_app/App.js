import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Front from './screens/front';
import Login from './screens/login'
import NewUser from './screens/create_new_account';
import ReceiptData from './screens/receipt_data'
import ImagePicking from './screens/image_picker'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="picking">
        <Stack.Screen options={{ headerShown: false }} name="Front" component={Front} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="NewUser" component={NewUser} />
        <Stack.Screen options={{ headerShown: false }} name="ReceiptData" component={ReceiptData} />
        <Stack.Screen options={{ headerShown: false }} name="picking" component={ImagePicking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;