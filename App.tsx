import { Container, NativeBaseProvider } from 'native-base';
import Root from './src/navigation/Root';
import tabo_theme from './src/theme';
import { useFonts } from "expo-font";
// import { useEffect } from 'react';
// import * as SplashScreen from 'expo-splash-screen'


export default function App() {
  const [fontsLoaded, _error] = useFonts({
    WixMadeforDisplayRegular:   require("./assets/fonts/WixMadeforDisplay-Regular.ttf"),
    WixMadeforDisplayMedium:    require("./assets/fonts/WixMadeforDisplay-Medium.ttf"),
    WixMadeforDisplaySemiBold:  require("./assets/fonts/WixMadeforDisplay-SemiBold.ttf"),
    WixMadeforDisplayBold:      require("./assets/fonts/WixMadeforDisplay-Bold.ttf"),
    WixMadeforDisplayExtraBold: require("./assets/fonts/WixMadeforDisplay-ExtraBold.ttf"),
  });

  return (
    <NativeBaseProvider theme={tabo_theme}>
      { fontsLoaded &&
        <Root/>
      }
      { !fontsLoaded &&
        <Container/>
      }
    </NativeBaseProvider>
  );
}