import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonButton from "../common/CommonButton";
import RazorpayCheckout from "react-native-razorpay";

const Checkout = () => {
  const cartData = useSelector((state) => state.Reducers);
  const addressList = useSelector((state) => state.AddressReducers);
  const [selectedAddress, setSelectedAddress] = useState("");

  const getTotal = () => {
    let tempTotal = 0;
    cartData.map((item) => {
      tempTotal = tempTotal + item.price;
    });
    return tempTotal;
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          
            <FlatList
              data={cartData}
              renderItem={({ item, index }) => {
                return (
                  <View
                    style={{
                      width: "95%",
                      alignSelf: "center",
                      height: 80,
                      flexDirection: "row",
                      marginTop: 10,
                      // borderWidth:1,
                      // borderColor:'#8e8e8e',
                      borderRadius: 10,
                      alignItems: "center",
                      backgroundColor: "#FF3F6C",
                    }}
                  >
                    <Image
                      source={item.image}
                      style={{
                        width: 70,
                        height: 70,
                        marginLeft: 10,
                        borderRadius: 10,
                        objectFit: "contain",
                      }}
                    />
                    <View style={{ padding: 10 }}>
                      <Text style={{ fontSize: 18, color: "#fff" }}>
                        {item.name}
                      </Text>
                      <Text style={{ color: "#fff", marginTop: 10 }}>
                        {"₹" + item.price}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 10,
              marginTop: 30,
              borderTopWidth: 0.5,
              height: 50,
              borderTopColor: "#8e8e8e",
            }}
          >
            <Text style={{ color: "#000" }}>Total :</Text>
            <Text style={{ color: "#000" }}>{"₹" + getTotal()}</Text>
          </View>
          <ScrollView
            style={{
              height: 100,
              borderWidth: 2,
              borderColor: "#8e8e8e",
              borderRadius: 20,
              width: "95%",
              alignSelf: "center",
            }}
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}
          >
              <FlatList
                data={addressList}
                renderItem={({ item, index }) => {
                  return (
                    <View
                      style={{
                        width: "90%",
                        borderBottomWidth: 0.2,
                        borderBottomColor: "#8e8e8e",
                        alignSelf: "center",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <View style={{ width: "70%" }}>
                        <Text style={{ marginLeft: 20 }}>
                          {"City: " + item.city}
                        </Text>
                        <Text style={{ marginLeft: 20 }}>
                          {"Building: " + item.building}
                        </Text>
                        <Text style={{ marginLeft: 20 }}>
                          {"Pincode: " + item.pincode}
                        </Text>
                        <Text style={{ marginLeft: 20 }}>
                          {"Mobile: " + item.mobile}
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{
                          padding: 4,
                          marginRight: 20,
                          width: "30%",
                          borderWidth: 0.5,
                          borderColor: "#8e8e8e",
                        }}
                        onPress={() => {
                          setSelectedAddress(
                            "City :" +
                              item.city +
                              " " +
                              ", Building: " +
                              item.building +
                              " Pincode: " +
                              item.pincode +
                              "," +
                              item.mobile
                          );
                        }}
                      >
                        <Text
                          style={{
                            color: "#000",
                            fontSize: 12,
                            alignSelf: "center",
                          }}
                        >
                          Select Address
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </ScrollView>
          </View>
          <Text
            style={{
              marginVertical: 20,
              width: "90%",
              alignSelf: "center",
              fontSize: 18,
            }}
          >
            Address -
          </Text>
          <Text style={{ fontSize: 16, width: "90%", alignSelf: "center" }}>
            {setSelectedAddress == "" ? (
              <View>
                <Text>Please select address from above list.</Text>
              </View>
            ) : (
              selectedAddress
            )}
          </Text>
          <CommonButton bgColor={'#FF3F6C'} textColor={'#fff'} title={'Place Order'} onPress={() => {
              var options = {
                description: 'Credits towards consultation',
                image: 'https://i.imgur.com/3g7nmJC.png',
                currency: 'INR',
                key: 'rzp_test_Z2uk9P1T7Oc9pl', // Your api key
                amount: '' + parseInt(getTotal() * 100) + '',
                name: 'UniverseShop',
                prefill: {
                  email: 'rohangautam.it19@gmail.com',
                  contact: '9664337106',
                  name: 'Razorpay Software'
                },
                theme: {color: '#F37254'}
              }
              RazorpayCheckout.open(options).then((data) => {
                // handle success
                alert(`Success: ${data.razorpay_payment_id}`);
              }).catch((error) => {
                // handle failure
                alert(`Error: ${error.code} | ${error.description}`);
              });
          }} />
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checkout;
