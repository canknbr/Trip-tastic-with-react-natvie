import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/screens/HomeScreen';
import { Discover } from './src/screens/DiscoverScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <TailwindProvider>
  <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerShown: false,

    }}
    initialRouteName='Discover'
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Discover" component={Discover} />
    </Stack.Navigator>
  </NavigationContainer>
      <StatusBar style="auto" />
    </TailwindProvider>
  );
}

