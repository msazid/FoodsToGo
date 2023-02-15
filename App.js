import { StatusBar as ExpoStatusbar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, StatusBar, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { SearchbarComponents } from './src/components/SearchbarComponent';
import { RestaurantScreen } from './src/features/restaurants/screens/restaurants.screen';
import { theme } from './src/infrastructure/theme';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !latoLoaded){
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusbar style='auto' />
    </>
  );
}

