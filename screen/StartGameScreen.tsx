import React, {useState} from 'react';
import {Alert, StyleSheet, TextInput, View} from "react-native";
import PrimaryButton from "@/components/ui/PrimaryButton";
import {Colors} from "@/constants/Colors";

interface StartGameScreenProps {
    onPickNumber: (pickedNumber: number) => void;
}

const StartGameScreen = ({onPickNumber}: StartGameScreenProps) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    const numberInputHandler = (enteredText: string) => {
        setEnteredNumber(enteredText);
    }

    const resetHandler = () => {
        setEnteredNumber('')
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                '유효하지 않은 숫자',
                '1 ~ 99 까지의 숫자만 가능합니다.',
                [{text: '화인', style: 'destructive', onPress: resetHandler}]
            );
            return;
        }

        onPickNumber(chosenNumber)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.inputNumber}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton pressHandler={resetHandler}>리셋</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton pressHandler={confirmInputHandler}>시작</PrimaryButton>
                </View>
            </View>
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        marginTop: 100,
        padding: 16,
        borderRadius: 8,
        elevation: 4,
        alignItems: 'center'
    },
    inputNumber: {
        width: 50,
        height: 50,
        textAlign: "center",
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
})
