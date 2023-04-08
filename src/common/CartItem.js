import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Toast from 'react-native-simple-toast';

const CartItem = ({
  item,
  onRemoveItem,
  onAddToWishlist,
  onRemoveFromWishlist,
  onAddToCart,
  isWishList,
}) => {

  return (
    <View
      style={{
        height: 200,
        width: "94%",
        borderRadius: 10,
        elevation: 5,
        backgroundColor: "#fff",
        marginBottom: 20,
        alignSelf: "center",
      }}
    >
      <Image
        source={item.image}
        style={{
          width: "100%",
          height: "58%",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <Text
        style={{
          marginLeft: 10,
          marginTop: 10,
          fontSize: 18,
          fontWeight: 600,
          color: "#000",
        }}
      >
        {item.name}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#000" }}>
          {"₹" + item.price}
        </Text>
        {isWishList ? (
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
            onPress={() => {
                onAddToCart(item);
            }}
          >
            <Text style={{ color: "#000" }}>Add To Cart</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
            onPress={() => {
              onRemoveItem();
            }}
          >
            <Text style={{ color: "#000" }}>Remove Item</Text>
          </TouchableOpacity>
        )}
      </View>
      {isWishList ? (
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#fff",
            elevation: 5,
            position: "absolute",
            top: 10,
            right: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            onRemoveFromWishlist();
          }}
        >
          <Image
            source={require("../Images/heart_fill.png")}
            style={{ height: 24, width: 24, tintColor: "red" }}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#fff",
            elevation: 5,
            position: "absolute",
            top: 10,
            right: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            onAddToWishlist(item);
            // showToast();
            Toast.show('Item added to Wishlist', Toast.LONG);
          }}
        >
          <Image
            source={require("../Images/heart.png")}
            style={{ height: 24, width: 24 }}
            
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CartItem;
