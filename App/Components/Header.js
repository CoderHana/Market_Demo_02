import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import Icon from "react-native-vector-icons/Feather"

export default class SearchScreen extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: '#9a8ecc96', alignItems: "flex-start", justifyContent: "center"}}>
        <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 15}}>
          <Icon name="menu" size={20} style={{marginTop: 10, marginStart: 10, marginBottom: 10}}/>
          <View style={{marginStart: 15}}>
            <Text>آدرس شما</Text>
            <View style={{flexDirection: "row", alignItems: "center"}}>
              <Text style={{fontWeight: 'bold'}}>جردن</Text>
              <Icon name="chevron-down" size={16} style={{marginTop: 5}}/>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          // onPress={() => this.props.navigation.navigate('Search')}
        >
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 40,
              borderWidth: 1,
              borderColor: '#9a8ecc',
              padding: 5,
              marginBottom: 15,
              width: 380,
            }}>
            <Text
              style={{
                color: '#888',
                marginLeft: 10
              }}>
              دنبال چی می‌گردی؟
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
