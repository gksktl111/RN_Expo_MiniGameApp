import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {Colors} from "@/constants/Colors";

interface PrimaryButtonProps {
    children: React.ReactNode; // children 속성을 포함하는 인터페이스 정의
    pressHandler? : () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({children, pressHandler}) => {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={styles.buttonInnerContainer}
                onPress={pressHandler}
                android_ripple={{color: Colors.primary600}}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>

    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 50,
        margin: 4,
        overflow:'hidden'
    }
    ,
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight:"bold",
    }
})
