import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Colors} from "@/constants/Colors";

interface TitleProps {
    title: string;
}

const Title = ({title} : TitleProps) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
    }
})
