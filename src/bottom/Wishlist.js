import { View, Text, FlatList } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../common/CartItem";
import { addItemToCart, removeFromWishlist } from "../redux/actions/Actions";

const Wishlist = () => {
  const cartData = useSelector((state) => state.Reducers2);
  const dispatch = useDispatch();

  return (
    <>
      {cartData.length == 0 ? (
        <View style={{ flex:1, alignItems:"center", justifyContent:'center'}}>
          <Text
          style={{
            fontSize:24,
            fontWeight:600,
            color:'#FF3F6C'
          }}
          >
            Your Wishlist is Empty.
            </Text>
        </View>
      ) : (
        <View style={{ flex: 1, marginTop: 16, marginBottom: 65 }}>
          <FlatList
            data={cartData}
            renderItem={({ item, index }) => {
              return (
                <CartItem
                  isWishList={"qwer"}
                  item={item}
                  onRemoveFromWishlist={() => {
                    dispatch(removeFromWishlist(index));
                  }}
                  onAddToCart={(x) => {
                    dispatch(addItemToCart(x));
                  }}
                />
              );
            }}
          />
        </View>
      )}
    </>
  );
};

export default Wishlist;
