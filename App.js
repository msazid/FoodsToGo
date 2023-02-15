import { StatusBar as ExpoStatusbar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, StatusBar, Text, View } from 'react-native';
import { SearchbarComponents } from './src/components/SearchbarComponent';
import { RestaurantScreen } from './src/features/restaurants/screens/restaurants.screen';

export default function App() {
  return (
    <>
      <RestaurantScreen/>
      <ExpoStatusbar style='auto' />
    </>
  );
}

