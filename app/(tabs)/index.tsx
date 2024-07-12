import React, {useState, useEffect} from 'react';
import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import StartGameScreen from '@/screen/StartGameScreen';
import GameScreen from '@/screen/GameScreen';
import {StatusBar} from 'expo-status-bar';
import {Colors} from '@/constants/Colors';
import GameOverScreen from '@/screen/GameOverScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [userNumber, setUserNumber] = useState(0);
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    const [fontsLoaded] = useFonts({
        'open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
    });

    useEffect(() => {
        async function hideSplashScreen() {
            if (fontsLoaded) {
                await SplashScreen.hideAsync();
            }
        }

        hideSplashScreen();
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    const pickedNumberHandler = (pickedNumber: number) => {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    };

    const gameOverHandler = (numberOfRounds : number) => {
        setGameIsOver(true);
        setGuessRounds(numberOfRounds)
    };

    const startNewGameHandler = () => {
        setUserNumber(0);
        setGuessRounds(0);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
    }

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen
            userNumber={userNumber}
            roundsNumber={guessRounds}
            onStartNewGame={startNewGameHandler}
        />;
    }

    return (
        <LinearGradient colors={[Colors.primary500, Colors.accent500]} style={styles.rootScreen}>
            <StatusBar style="light"/>
            <ImageBackground
                source={require('../../assets/images/background.png')}
                resizeMode="cover"
                imageStyle={styles.backgroundImage}
                style={styles.rootScreen}
            >
                <SafeAreaView style={styles.rootScreen}>
                    {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15,
    },
});
