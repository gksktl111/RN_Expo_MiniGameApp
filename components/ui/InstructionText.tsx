import React from 'react';
import {StyleSheet, Text, TextStyle} from "react-native";
import {Colors} from "@/constants/Colors";

interface InstructionTextProps {
    children: React.ReactNode;
    // 다양한 스타일 타입이 존재함
    // 각 요소에 맞는 스타일 타입을 사용할 것
    // 타입 종류 ViewStyle, TextStyle, ImageStyle
    style?: TextStyle;
}

const InstructionText = ({children, style} : InstructionTextProps) => {
    return (
        // 스타일을 프롭스로 받아서 css의 계단식 스타일링을 구현 가능함
        // 또한 배열의 후순위가 높은 우선순위를 갖음 즉 중복되는 스타일이 존재하면
        // 이전 스타일에서 덮여쓰여짐
        <Text style={[styles.instructionText, style]}>{children}</Text>
    );
};

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily:'open-sans',
        color: Colors.accent500,
        fontSize: 24,
    }
})

