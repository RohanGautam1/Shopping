import { View, Text, StatusBar } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../common/CustomTextInput";
import CommonButton from "../common/CommonButton";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [badName, setBadName] = useState(false);
  const [email, setEmail] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [mobile, setMobile] = useState("");
  const [badMobile, setBadMobile] = useState(false);
  const [password, setPassword] = useState("");
  const [badPassword, setBadPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [badConfirmPassword, setBadConfirmPassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const signupp = () => {
    setButtonDisabled(true);
    if (name == "") {
      setBadName(true);
      setButtonDisabled(false);
    } else {
      setBadName(false);
      if (email == "") {
        setBadEmail(true);
        setButtonDisabled(false);
      } else {
        setBadEmail(false);
        if (mobile == "") {
          setBadMobile(true);
          setButtonDisabled(false);
        } else {
          setBadMobile(false);
          if (password == "") {
            setBadPassword(true);
            setButtonDisabled(false);
          } else {
            setBadPassword(false);
            if (confirmPassword == "") {
              setBadConfirmPassword(true);
              setButtonDisabled(false);
            } else {
              setBadConfirmPassword(false);
              if (password !== confirmPassword) {
                setBadConfirmPassword(true);
                setButtonDisabled(false);
              } else {
                setBadConfirmPassword(false);
                saveData();
              }
            }
          }
        }
      }
    }
  };

  const saveData = async () => {
    await AsyncStorage.setItem("NAME", name);
    await AsyncStorage.setItem("EMAIL", email);
    await AsyncStorage.setItem("MOBILE", mobile);
    await AsyncStorage.setItem("PASSWORD", password);
    console.log(":yes");
    navigation.goBack();
  };
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
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
            marginTop: 40,
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
          Create New Account
        </Text>
        <CustomTextInput
          icon={require("../Images/user.png")}
          placeholder={"Enter Name"}
          value={name}
          onChangeText={(txt) => {
            setName(txt);
          }}
        />
        {badName === true && (
          <Text
            style={{
              marginTop: 10,
              marginLeft: 30,
              color: "red",
            }}
          >
            ! Please Enter Name
          </Text>
        )}
        <CustomTextInput
          icon={require("../Images/email.png")}
          placeholder={"Enter Email Id"}
          value={email}
          onChangeText={(txt) => {
            setEmail(txt);
          }}
        />
        {badEmail === true && (
          <Text
            style={{
              marginTop: 10,
              marginLeft: 30,
              color: "red",
            }}
          >
            ! Please Enter Email Id
          </Text>
        )}
        <CustomTextInput
          icon={require("../Images/mobile.png")}
          placeholder={"Enter Mobile"}
          value={mobile}
          keyboardType={"number-pad"}
          onChangeText={(txt) => {
            setMobile(txt);
          }}
        />
        {badMobile === true && (
          <Text
            style={{
              marginTop: 10,
              marginLeft: 30,
              color: "red",
            }}
          >
            ! Please Enter Mobile Number
          </Text>
        )}
        <CustomTextInput
          icon={require("../Images/lock.png")}
          placeholder={"Enter Password"}
          type={"password"}
          value={password}
          onChangeText={(txt) => {
            setPassword(txt);
          }}
        />
        {badPassword === true && (
          <Text
            style={{
              marginTop: 10,
              marginLeft: 30,
              color: "red",
            }}
          >
            ! Please Enter Password
          </Text>
        )}
        <CustomTextInput
          icon={require("../Images/lock.png")}
          placeholder={"Enter Confirm Password"}
          type={"Confirm password"}
          value={confirmPassword}
          onChangeText={(txt) => {
            setConfirmPassword(txt);
          }}
        />
        {badConfirmPassword === true && (
          <Text
            style={{
              marginTop: 10,
              marginLeft: 30,
              color: "red",
            }}
          >
            ! Please Enter Correct Password
          </Text>
        )}
        <CommonButton
          title={"Sign Up"}
          bgColor={buttonDisabled ? "#fc7998" : "#FF3F6C"}
          textColor={"#ffffff"}
          onPress={() => {
            signupp();
          }}
          disabled={buttonDisabled}
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
            navigation.goBack();
          }}
        >
          Already have Account?
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;
