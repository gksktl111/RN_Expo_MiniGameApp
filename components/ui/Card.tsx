import React from 'react';
import {StyleSheet, View} from "react-native";
import {Colors} from "@/constants/Colors";

interface CardProps {
    children: React.ReactNode; // children 속성을 포함하는 인터페이스 정의
}


const Card = ({children} : CardProps) => {
    return (
        <View style={styles.card}>
            {children}
        </View>

    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        marginTop: 36,
        padding: 16,
        borderRadius: 8,
        elevation: 4,
        alignItems: 'center'
    }

})
