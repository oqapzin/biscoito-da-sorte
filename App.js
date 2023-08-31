import { useState } from 'react';
import { Appearance, StyleSheet, View } from 'react-native';
import InitialPage from './components/InitialPage';
import TextPage from './components/TextPage';

export default function App() {
  const [initialPage, setInitialPage] = useState(false)


  /*DarkMode utilizando as preferências de cores do aparelho celular.*/ 
  const colorScheme = Appearance.getColorScheme();
  const isDarkMode = colorScheme??"light"

  return (
    <View style={[styles.container,(isDarkMode == "dark") ? { backgroundColor: 'black' } : { backgroundColor: '#fff' }]}>

      {!initialPage ?
        <InitialPage generateText={()=>setInitialPage(true)}/>
        :
        <TextPage resetPage={()=>setInitialPage(false)}/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});