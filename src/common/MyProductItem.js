import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const MyProductItem = ({ item, onAddToCart, onAddToWishlist }) => {
  return (
    <View
      style={{
        height: 200,
        width: 200,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: "#fff",
        marginLeft: 20,
        marginBottom: 10,
      }}
    >
      <Image
        source={item.image}
        style={{
          width: "100%",
          height: "50%",
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
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
          onPress={() => {
            onAddToCart(item)
          }}
        >
          <Text style={{ color: "#000" }}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
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
          onAddToWishlist(item)
        }}
      >
        <Image
          source={require("../Images/heart.png")}
          style={{ height: 24, width: 24 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MyProductItem;
