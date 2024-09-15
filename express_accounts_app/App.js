// TODO -----------

// Firebase register
// Firebase login
// Federated login
// When create account is pressed, provide link to privacy policy and only allow continue if accept
// extract values from detected text

// when returning, popup to accept overwrite of values extracted from image text

// Convert sizes to flex



// DONE -----------
// On image tab, currency/amount/date/category boxes
// replace button in image tab with touchable opactity 
// aforementioned button should launch camera/picker seect modal
// save button on image_page
// Reject buttons next to currency/amount/date/category

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Front from './screens/front';
import Login from './screens/login'
import NewUser from './screens/create_new_account';
import ReceiptData from './screens/receipt_data'
import ImagePicking from './screens/image_picker'
import Camera from './screens/camera'
import Process from './screens/process_image';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ReceiptData">
        <Stack.Screen options={{ headerShown: false }} name="Front" component={Front} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="NewUser" component={NewUser} />
        <Stack.Screen options={{ headerShown: false }} name="ReceiptData" component={ReceiptData} />
        {/* <Stack.Screen options={{ headerShown: false }} name="picking" component={ImagePicking} /> */}
        <Stack.Screen options={{ headerShown: false }} name="Camera" component={Camera} />
        <Stack.Screen options={{ headerShown: false }} name="Process" component={Process} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;