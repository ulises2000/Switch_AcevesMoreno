import React, {useState} from 'react'
import { Text, StyleSheet, View, Button, TouchableWithoutFeedback, Keyboard, useWindowDimensions } from 'react-native'

import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'
import {NumberContainer} from '../components/NumberContainer'

const StartGameScreen = props => {

    const { width, height } = useWindowDimensions();

    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');

    const handlerInputNumber = text => {
        setEnteredValue(text.replace(/[^0-9]/g, ''))
    }

    const handlerResetInput = () => {
        setConfirmed(false);
        setEnteredValue('')
    }

    const handlerConfirmInput = () => {
        let choseNumber = parseInt(enteredValue)
        if(choseNumber === NaN || choseNumber < 0 || choseNumber > 99 || choseNumber.lenght < 1) return;

        setConfirmed(true);
        setSelectedNumber(parseInt(enteredValue))
        setEnteredValue('')
    }

    const confirmedOutput = confirmed ? <Text>Numero elegido: {selectedNumber}</Text> : null

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <View style={styles.screen}>
                <Text style={styles.title}>Comenzar Juego</Text>
                <Card style={{...styles.inputContainer, width: width * 0.8}}>
                    <Text>Elija un número</Text>
                    <Input style={styles.input} 
                        blurOnSubmit
                        autoCapitalization="none"
                        autoCorrect={false}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={handlerInputNumber}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}> 
                        <Button title='Limpiar' onPress={() => handlerResetInput()} color={Colors.accent} />
                        </View>
                        <View style={styles.button}>
                            <Button title='Confirmar' onPress={() => handlerConfirmInput()} 
                            color={Colors.primary} disabled={enteredValue.length <1 ? true : false}/>
                        </View>
                    </View>
                </Card>
                {confirmed && (
                    <Card style={styles.summaryContainer}>
                        <Text>Tu Seleccion</Text>
                        <NumberContainer>{selectedNumber}</NumberContainer>
                        <Button title='Empezar Juego' onPress={() => props.onStartGame(selectedNumber)}/>
                    </Card>
                )}
            </View>
        </TouchableWithoutFeedback> 
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'EduBold'
    },
    button: {
        width: 100,
        justifyContent: 'space-between'
    },
    inputContainer: {
        padding: 20,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '60%',
        height: '30%'
    },
})

export default StartGameScreen
