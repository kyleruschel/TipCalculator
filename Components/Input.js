import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const Input = ({ val, setVal }) => {
    return (
        <View style={styles.root}>
                <TextInput
                    keyboardType='numeric'
                    style={styles.input}
                    value={val}
                    onChange={e => setVal(e.nativeEvent.text)}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        marginTop: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: 100,
        backgroundColor: '#f4f4f8',
        borderRadius: 8,
        textAlign: 'center',
    }
})

export default Input;