import { StatusBar, View } from 'react-native';
import { 
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
 } from '@expo-google-fonts/roboto';
 import { Text, GluestackUIProvider } from '@gluestack-ui/themed';
 import { config } from '@gluestack-ui/config';
 
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <GluestackUIProvider config={config}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <StatusBar 
          barStyle="dark-content" 
          backgroundColor="transparent" 
          translucent 
        />
        {fontsLoaded 
          ? ( <Text>Hello world - Gym app!</Text> ) 
          : ( <Loading /> )
        }
      </View>
    </GluestackUIProvider>
  );
}
