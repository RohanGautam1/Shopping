import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
let name = '';
const Profile = () => {

  const navigation = useNavigation();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    name = await AsyncStorage.getItem('NAME');
  }
  
  return (
    <View style={{flex:1 }}>
      <View
        style={{
          width:'100%',
          height:70,
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
        }}
      >
        <Text
          style={{
            fontWeight:'600',
            fontSize:18,
            marginLeft:15,
          }}
        >
          Profile
        </Text>
        <TouchableOpacity
          style={{
            width:30,
            height:30,
            marginRight:20,
            justifyContent:'center',
            alignItems:'center',
          }}
        >
          <Image 
          source={require('../Images/settings.png')}
          style={{
            width:24,
            height:24,
          }}
          />
        </TouchableOpacity>
      </View>
      <Image 
      source={require('../Images/profile.png')} 
      style={{
        width:80,
        height:80,
        alignSelf:'center',
        marginTop:30,
      }}
      />
      <Text style={{color:'#000', alignSelf:'center', marginTop:20, fontSize:20}}>{name}</Text>
      <TouchableOpacity 
      style={{
        width:'90%',
        alignSelf:'center',
        height:50,
        borderBottomWidth:.3,
        marginTop:20,
        borderBottomColor:'#8e8e8e',
        justifyContent:'center'
      }}
      onPress={() => {
        navigation.navigate('MyAddress');
      }}
      >
        <Text>My Address</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={{
        width:'90%',
        alignSelf:'center',
        height:50,
        borderBottomWidth:.3,
        borderBottomColor:'#8e8e8e',
        justifyContent:'center'
      }}>
        <Text>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={{
        width:'90%',
        alignSelf:'center',
        height:50,
        borderBottomWidth:.3,
        borderBottomColor:'#8e8e8e',
        justifyContent:'center'
      }}>
        <Text>Offers</Text>
      </TouchableOpacity>
  
    </View>
  )
}

export default Profile