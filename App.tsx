import { NativeBaseProvider } from 'native-base';
import Root from './src/navigation/Root';
import tabo_theme from './src/theme/tabo_theme';
import { useFonts } from "expo-font";


export default function App() {
  useFonts({
    "WixMadeforDisplay": require("./assets/fonts/WixMadeforDisplay.ttf")
  });

  // setTimeout(() => { console.log("ho"); }, 2000);

  return (
    <NativeBaseProvider theme={tabo_theme}>
      <Root/>
    </NativeBaseProvider>
  );
}