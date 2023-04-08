import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomTextInput from "../common/CustomTextInput";
import CommonButton from "../common/CommonButton";
import { useDispatch } from "react-redux";
import { addAddress } from "../redux/actions/Actions";

const AddAddress = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState("");
  const [building, setBuilding] = useState("");
  const [pin, setPin] = useState("");
  const [mobile, setMobile] = useState("");
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 70,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            marginLeft: 20,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0.2,
            padding: 7,
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("../Images/back.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
      <CustomTextInput
        icon={require("../Images/buildings.png")}
        placeholder={"Enter City Name"}
        value={city}
        onChangeText={(txt) => {
          setCity(txt);
        }}
      />
      <CustomTextInput
        icon={require("../Images/building.png")}
        placeholder={"Enter Building Name"}
        value={building}
        onChangeText={(txt) => {
          setBuilding(txt);
        }}
      />
      <CustomTextInput
        icon={require("../Images/mobile.png")}
        placeholder={"Enter Mobile"}
        value={mobile}
        keyboardType={"number-pad"}
        onChangeText={(txt) => {
          setMobile(txt);
        }}
      />
      <CustomTextInput
        icon={require("../Images/pin.png")}
        placeholder={"Enter Pincode"}
        value={pin}
        keyboardType={"number-pad"}
        onChangeText={(txt) => {
          setPin(txt);
        }}
      />
      <CommonButton
        title={"Save Address"}
        bgColor={"#FF3F6C"}
        textColor={"#fff"}
        onPress={() => {
            if (city !== '' && building !== '' && pin !== '' && mobile !== ''){
              dispatch(addAddress({city : city, building : building, pincode : pin, mobile : mobile}));
              navigation.goBack();
            }
        }}
      />
    </View>
  );
};

export default AddAddress;
