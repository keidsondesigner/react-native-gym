import { StatusBar, View } from 'react-native';
import { 
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
 } from '@expo-google-fonts/roboto';
 import { GluestackUIProvider, Box } from '@gluestack-ui/themed';
 import { config } from './config/gluestack-ui.config';
 
import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';

// 2 - Provendo o contexto de autenticação para toda a aplicação;
import { AuthContextProvider } from '@contexts/AuthContext'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <GluestackUIProvider config={config} colorMode="dark">
      <Box flex={1} backgroundColor="$gray700">
        <StatusBar 
          barStyle="light-content" 
          backgroundColor="transparent" 
          translucent 
        />
        <AuthContextProvider>
          { fontsLoaded ? <Routes /> : <Loading /> }
        </AuthContextProvider>
      </Box>
    </GluestackUIProvider>
  );
}
