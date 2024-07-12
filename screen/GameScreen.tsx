import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Alert, Text, FlatList} from "react-native";
// 리액트 아이콘은 웹용이라 사용 못함
// expo 에서 아이콘을 지원함
import {Ionicons} from "@expo/vector-icons"
import Title from "@/components/ui/Title";
import NumberContainer from "@/components/game/NumberContainer";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Card from "@/components/ui/Card";
import InstructionText from "@/components/ui/InstructionText";
import GuessLogItem from "@/components/game/GuessLogItem";


interface GameScreenProps {
    userNumber: number;
    onGameOver: (guessRounds : number) => void
}

// generateRandomBetween 함수의 매개변수와 반환값 타입 지정
function generateRandomBetween(min: number, max: number, exclude?: number): number {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber, onGameOver}: GameScreenProps) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    const nextGuessHandler = (direction: string) => {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert(
                '힌트가 잘못되었어요!',
                '제대로된 힌트를 주세요 ㅠㅠ',
                [
                    {text: '미안', style: 'cancel'}
                ])
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary);
        setCurrentGuess(newRndNumber)
        setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds])
    }

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    // 해당 컴포넌트가 처음으로 다시 렌더링 될때만 실행
    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100
    }, []);

    const guessRoundsListLength = guessRounds.length

    return (
        <View style={styles.screen}>
            <Title title={"상대방의 추측"}/>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>higher or lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton pressHandler={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove" size={24} color="white"/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton pressHandler={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add-outline" size={24} color="white"/>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) =>
                        <GuessLogItem
                            roundNumber={guessRoundsListLength - itemData.index}
                            guess={itemData.item}/>}
                    keyExtractor={(item) => item.toString()}
                />
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
    instructionText: {
        marginBottom: 12,
    }
    ,
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    listContainer:{
        flex:1,
        padding:24,

    }

})
