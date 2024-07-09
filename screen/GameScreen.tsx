import React, {useState} from 'react';
import {Text, View, StyleSheet} from "react-native";
import Title from "@/components/ui/Title";
import NumberContainer from "@/components/game/NumberContainer";


interface GameScreenProps {
    userNumber: number;
}

// generateRandomBetween 함수의 매개변수와 반환값 타입 지정
function generateRandomBetween(min: number, max: number, exclude: number): number {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = ({userNumber}: GameScreenProps) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    return (
        <View style={styles.screen}>
            <Title title={"상대방의 추측"}/>
            <NumberContainer children={currentGuess}/>
            <View>
                <Text>Higher or Lower?</Text>
            </View>
            <View>

            </View>
        </View>
    );
};

export default GameScreen;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        marginTop: 40
    },

})
