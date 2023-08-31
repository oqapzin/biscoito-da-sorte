import React from 'react'
import { Image, StyleSheet, Text } from 'react-native'
import Buttons from './Buttons';

const TextPage = ({ resetPage }) => {
    const phrase = [
        'Siga os bons e aprenda com eles.',
        'O bom-senso vale mais do que muito conhecimento.',
        'O riso é a menor distância entre duas pessoas.',
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.'
    ]

    function genenratePhrase() {
        let index = Math.floor(Math.random() * phrase.length);

        return phrase[index]
    }



    return (
        <>
            <Image
                style={styles.logo}
                source={require('../assets/biscoitoAberto.png')}
            />
            <Text style={styles.textStyle}>{genenratePhrase()}</Text>
            <Buttons buttonTitle={"Quebrar Biscoito"} returnActive={false} />
            <Buttons buttonTitle={"Reiniciar Biscoito"} buttonClick={() => resetPage(true)} />

        </>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 250,
        height: 250,
    },
    textStyle: {
        fontSize: 20,
        color: '#dd7b22',
        margin: 30,
        fontStyle: 'italic',
        textAlign: 'center'
    },
});


export default TextPage