import { View, Text, StatusBar } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../common/CustomTextInput";
import CommonButton from "../common/CommonButton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../common/Loader";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);


  const login = () => {
    setModalVisible(true);
    if (email == "") {
      setModalVisible(false);
      setBadEmail(true)
    }
    else{
      setBadEmail(false)
      if (password == "") {
        setModalVisible(false);
        setBadPassword(true)
      }
      else{
        setTimeout(() => {
          setBadPassword(false);
          getData();
        }, 2000);
      }
    }
  }

  const getData = async () => {
    const mEmail = await AsyncStorage.getItem('EMAIL');
    const mPass = await AsyncStorage.getItem('PASSWORD');
    if(mEmail===email && mPass===password){
      setModalVisible(false);
      navigation.navigate('Home');
    }
    else{
      setModalVisible(false);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
      />

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 90,
          height: 90,
          borderRadius: 90,
          backgroundColor: "#FF3F6C",
          alignSelf: "center",
          marginTop: 60,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: 600, color: "#ffffff" }}>
          UNIVERSE
        </Text>
      </View>
      <Text
        style={{
          marginTop: 50,
          fontSize: 30,
          fontWeight: 600,
          color: "#FF3F6C",
          alignSelf: "center",
        }}
      >
        Login
      </Text>
      <CustomTextInput
        icon={require("../Images/email.png")}
        placeholder={"Enter Email Id"}
        value={email}
        onChangeText={(txt) => {
          setEmail(txt);
        }}
      />
      {
        badEmail===true && (
        <Text
        style={{
          marginTop:10,
          marginLeft:30,
          color:'red',
        }}
        >! Please Enter Email Id</Text>
        )
      }
      <CustomTextInput
        icon={require("../Images/lock.png")}
        placeholder={"Enter Password"}
        type={"password"}
        value={password}
        onChangeText={(txt) => {
          setPassword(txt);
        }}
      />
      {
        badPassword===true && (
        <Text
        style={{
          marginTop:10,
          marginLeft:30,
          color:'red',
        }}
        >! Please Enter Password</Text>
        )
      }
      <CommonButton
        title={"Login"}
        bgColor={"#FF3F6C"}
        textColor={"#ffffff"}
        onPress={() => {
          login();
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: "800",
          alignSelf: "center",
          marginTop: 20,
          textDecorationLine: "underline",
        }}
        onPress={() => {
          navigation.navigate("Signup");
        }}
      >
        Create New Account?
      </Text>
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />

    </View>
  );
};

export default Login;
