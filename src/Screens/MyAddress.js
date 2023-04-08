import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddress } from '../redux/actions/Actions';
let addressList = [];

const MyAddress = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const addressList = useSelector(state => state.AddressReducers);
    const dispatch = useDispatch();
    console.log(addressList);
  return (
    <View style={{flex:1}}>
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
          My Address
        </Text>
        <TouchableOpacity
          style={{
            marginRight:20,
            justifyContent:'center',
            alignItems:'center',
            borderWidth:.2,
            padding:7,
            borderRadius:10,
          }}
          onPress={() => {
            navigation.navigate('AddAddress');
          }}
        >
        <Text>Add Address</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={addressList}
        renderItem={({item, index}) => {
          return(
            <View
             style={{
                width:'100%',
                borderWidth:.2,
                borderColor:'#8e8e8e',
                alignSelf:'center',
                justifyContent:'space-between',
                flexDirection:'row',
                alignItems:'center',
             }}>
              <View>
                <Text style={{marginLeft:20}}>{'City: ' + item.city}</Text>
                <Text style={{marginLeft:20}}>{'Building: ' + item.building}</Text>
                <Text style={{marginLeft:20}}>{'Pincode: ' + item.pincode}</Text>
                <Text style={{marginLeft:20}}>{'Mobile: ' + item.mobile}</Text>
              </View>
              <TouchableOpacity style={{borderWidth:.2, padding:7, marginRight: 20}} onPress={() => {
                dispatch(deleteAddress(index))
              }} >
                <Text>Delete Address</Text>

              </TouchableOpacity>

            </View>
          )
        }}
      
      />
    </View>
  )
}

export default MyAddress