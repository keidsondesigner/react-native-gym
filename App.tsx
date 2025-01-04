import { StatusBar, Text, View } from 'react-native';
import { 
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
 } from '@expo-google-fonts/roboto';
 import { GluestackUIProvider } from '@gluestack-ui/themed';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <GluestackUIProvider>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
          <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
          {fontsLoaded ? <Text>Hello world - Gym app!</Text> : <View />}
        </View>
    </GluestackUIProvider>
  );
}
