import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const CommonButton = ({ onPress, title, bgColor, textColor, disabled }) => {
  return (
    <TouchableOpacity
    disabled={disabled}
      style={{
        backgroundColor: bgColor,
        justifyContent: "center",
        alignItems: "center",
        width:'85%',
        height:50,
        borderRadius:10,
        alignSelf:'center',
        marginTop:40,
      }}
      onPress={() => {
        onPress();
      }}
    >
        <Text style={{color: textColor, fontSize:20, fontWeight:600}}>
        {title}
        </Text>
    </TouchableOpacity>
  );
};

export default CommonButton;
