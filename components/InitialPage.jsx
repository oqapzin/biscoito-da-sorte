import Buttons from './Buttons'
import { Image, StyleSheet } from 'react-native'

const InitialPage = ({ generateText }) => {
    function setGenerateText() {
        generateText(true)
    }

    return (
        <>
            <Image
                style={styles.logo}
                source={require('../assets/biscoito.png')}
            />


            <Buttons buttonTitle={"Quebrar Biscoito"} buttonClick={setGenerateText} />
            <Buttons buttonTitle={"Reiniciar Biscoito"} returnActive={false}  />
        </>
    )
}


const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 250,
  },
});


export default InitialPage
