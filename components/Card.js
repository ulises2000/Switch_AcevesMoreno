import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = props => (
    <View style={{...styles.inputCard, ...props.style}}>
        {props.children}
    </View>
)

const styles = StyleSheet.create({
    inputCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    }
})

export default Card