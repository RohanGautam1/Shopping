import { View, Text, StatusBar, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Main from "../bottom/Main";
import Search from "../bottom/Search";
import Cart from "../bottom/Cart";
import Wishlist from "../bottom/Wishlist";
import Profile from "../bottom/Profile";
import { useSelector } from "react-redux";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const data = useSelector(state => state);
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}
      <View
        style={{
          width: "100%",
          height: 70,
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSelectedTab(0);
          }}
        >
          <Image
            source={require("../Images/home.png")}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 0 ? "#FF3F6C" : "#8e8e8e",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSelectedTab(1);
          }}
        >
          <Image
            source={require("../Images/search.png")}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 1 ? "#FF3F6C" : "#8e8e8e",
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: selectedTab == 2 ? "#FF3F6C" : "#000",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setSelectedTab(2);
            }}
          >
            <Image
              source={require("../Images/bag.png")}
              style={{ width: 24, height: 24, tintColor: "#fff" }}
            />
            <View
            style={{
              width:20,
              height:20,
              borderRadius:10,
              justifyContent:"center",
              alignItems:"center",
              position:"absolute",
              top:4,
              right:3,
              backgroundColor:'#fff',
            }}
            >
              <Text style={{color:"#000", fontWeight:'600'}} >{data.Reducers.length}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSelectedTab(3);
          }}
        >
          <Image
            source={require("../Images/heart.png")}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 3 ? "#FF3F6C" : "#8e8e8e",
            }}
          />
          <View
            style={{
              width:20,
              height:20,
              borderRadius:10,
              justifyContent:"center",
              alignItems:"center",
              position:"absolute",
              top:12,
              right:13,
              backgroundColor:'#000',
            }}
            >
              <Text style={{color:"#fff", fontWeight:'600'}} >{data.Reducers2.length}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSelectedTab(4);
          }}
        >
          <Image
            source={require("../Images/user.png")}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 4 ? "#FF3F6C" : "#8e8e8e",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
