import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/screens/HomeScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <TailwindProvider>
  <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerShown: false,

    }}
    initialRouteName='Home'
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
      <StatusBar style="auto" />
    </TailwindProvider>
  );
}

