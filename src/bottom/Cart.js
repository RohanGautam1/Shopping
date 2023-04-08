import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../common/CartItem";
import { addToWishlist, removeFromCart } from "../redux/actions/Actions";
import CommonButton from "../common/CommonButton";
// import RazorpayCheckout from "react-native-razorpay";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const cartData = useSelector((state) => state.Reducers);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      {cartData.length == 0 ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "#FF3F6C",
            }}
          >
            Your Cart is Empty.
          </Text>
        </View>
      ) : (
        <View style={{ flex: 1, marginTop: 15, marginBottom: 65 }}>
          <FlatList
            data={cartData}
            renderItem={({ item, index }) => {
              return (
                <CartItem
                  item={item}
                  onAddToWishlist={(x) => {
                    dispatch(addToWishlist(x));
                  }}
                  onRemoveItem={() => {
                    dispatch(removeFromCart(index));
                  }}
                />
              );
            }}
          />
        </View>
      )}
      {cartData.length > 0 ? (
        <View style={{ marginBottom: 80 }}>
          <CommonButton
            bgColor={"#FF3F6C"}
            textColor={"#fff"}
            title={"Checkout"}
            onPress={() => {
            //   var options = {
            //     description: 'Credits towards consultation',
            //     image: 'https://i.imgur.com/3g7nmJC.png',
            //     currency: 'INR',
            //     key: 'rzp_test_Z2uk9P1T7Oc9pl', // Your api key
            //     amount: '5000',
            //     name: 'UniverseShop',
            //     prefill: {
            //       email: 'rohangautam.it19@gmail.com',
            //       contact: '9664337106',
            //       name: 'Razorpay Software'
            //     },
            //     theme: {color: '#F37254'}
            //   }
            //   RazorpayCheckout.open(options).then((data) => {
            //     // handle success
            //     alert(`Success: ${data.razorpay_payment_id}`);
            //   }).catch((error) => {
            //     // handle failure
            //     alert(`Error: ${error.code} | ${error.description}`);
            //   });

            navigation.navigate('Checkout');
            }}


          />
        </View>
      ) : null}
    </View>
  );
};

export default Cart;
