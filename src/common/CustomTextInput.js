import { View, Text, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const CustomTextInput = ({value, onChangeText, placeholder, icon, type, keyboardType}) => {
  return (
    <View
    style={{
        width:'85%',
        height:50,
        borderWidth: 0.5,
        borderRadius:10,
        alignSelf:'center',
        marginTop:25,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        
    }}
    >
        <Image source={icon} style={{width:24, height:24}} />
        <TextInput 
        value={value}
        onChangeText={txt => {
          onChangeText(txt);
        }}
        placeholder={placeholder}
        secureTextEntry={type ? true : false}
        style={{marginLeft:10, width:'90%',}}
        keyboardType={keyboardType?keyboardType:'default'}
        
        />
      
    </View>
  )
}

export default CustomTextInput