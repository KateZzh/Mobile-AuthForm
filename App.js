import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './src/screen/SignIn/SignIn.js';
import SignUp from './src/screen/SignUp/SignUp.js';
import Home from './src/screen/Home/Home.js';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      {/* screenOptions={{headerShown: false}} */}
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
