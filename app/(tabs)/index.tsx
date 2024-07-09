import React, {useState} from 'react';
import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from "@/screen/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import GameScreen from "@/screen/GameScreen";
import {StatusBar} from "expo-status-bar";
import {Colors} from "@/constants/Colors";

export default function App() {
    const [userNumber, setUserNumber] = useState(0);

    const pickedNumberHandler = (pickedNumber: number) => {
        setUserNumber(pickedNumber);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

    if (userNumber) {
        screen = <GameScreen/>
    }

    return (
        <LinearGradient colors={[Colors.primary500, Colors.accent500]} style={styles.rootScreen}>
            <StatusBar style={"light"}/>
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
        opacity: 0.15
    }
});
