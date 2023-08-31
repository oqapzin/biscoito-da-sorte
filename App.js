import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import InitialPage from './components/InitialPage';
import TextPage from './components/TextPage';

export default function App() {
  const [initialPage, setInitialPage] = useState(false)

  function getStatus(returnStatus) {
    console.log(returnStatus)
  }
  return (
    <View style={styles.container}>

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});