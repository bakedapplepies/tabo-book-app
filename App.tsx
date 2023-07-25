import { NativeBaseProvider } from 'native-base';
import Root from './src/navigation/Root';
import tabo_theme from './src/theme/tabo_theme';


export default function App() {
  return (
    <NativeBaseProvider theme={tabo_theme}>
      <Root/>
    </NativeBaseProvider>
  );
}