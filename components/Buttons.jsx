import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Buttons = ({ buttonTitle, buttonClick, returnActive = true }) => {

    function isButtonClicked(){
        if (returnActive) {
            buttonClick(true)
        }
    }

    return (
        <TouchableOpacity style={[styles.buttonStyle,!returnActive?{borderColor:'#f5d0ad'}:{borderColor: '#dd7b22'}]} onPress={() => isButtonClicked()} disabled={!returnActive}>
            <View style={styles.buttonSpace}>
                <Text style={[styles.buttonText,!returnActive?{color:'#f5d0ad'}:{color: '#dd7b22'}]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: 230,
        height: 50,
        margin: 8,
        borderWidth: 2,
        borderColor: '#dd7b22',
        borderRadius: 25
    },
    buttonSpace: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#dd7b22'
    }
});


export default Buttons