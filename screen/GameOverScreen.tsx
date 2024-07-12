import React from 'react';
import {View, StyleSheet, Image, Text} from "react-native";
import Title from "@/components/ui/Title";
import {Colors} from "@/constants/Colors";
import PrimaryButton from "@/components/ui/PrimaryButton";

interface GameOverScreenProps {
    roundsNumber : number
    userNumber : number
    onStartNewGame : () => void
}

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame} : GameOverScreenProps) => {
    return (
        <View style={styles.rootContainer}>
            <Title title="Game Over!" />
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/images/success.png')}
                    style={styles.image}
                />
            </View>
            {/*Text 컴포넌트의 경우는 스타일 버블링이 일어남*/}
            <Text style={styles.summaryText}>
                당신의 휴대폰은
                <Text style={styles.highlight}> {roundsNumber}</Text> 번의 라운드만에 숫자
                <Text style={styles.highlight}> {userNumber}</Text> 를 맞췄습니다!
            </Text>
            <PrimaryButton pressHandler={onStartNewGame}>Start New Game!</PrimaryButton>
        </View>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        paddingTop:24,
        justifyContent:'center',
        alignItems:'center'
    },
    imageContainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:Colors.primary800,
        overflow:'hidden',
        margin:36
    },
    image:{
        width:'100%',
        height:'100%',
    },
    summaryText:{
        fontFamily:'open-sans',
        fontSize:24,
        textAlign:'center',
        paddingHorizontal:24,
        marginBottom:12,
    },
    highlight:{
        fontFamily:'open-sans-bold',
        color:Colors.primary500,
        fontSize:36
    }
})
