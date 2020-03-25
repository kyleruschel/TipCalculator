import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TipButton = ({ title, onPress }) => {
    return (
        <View style={styles.buttonStyling}>
            <Button title={title} onPress={() => onPress(title)} />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyling: {
        margin: 5,
        backgroundColor: '#f4f4f8',
        borderRadius: 5,
        width: 80,
        marginTop: 30,
    }
})

export default TipButton;