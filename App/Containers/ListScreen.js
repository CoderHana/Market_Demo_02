import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import RestaurantActions from '../Redux/ResturantRedux'
import Icon from "react-native-vector-icons/Entypo";

class ListScreen extends Component {

  static navigationOptions = {
    tabBarLabel: "لیست خرید",
    tabBarIcon: <Icon name="list" size={24}/>
  }

  render () {
    return (
      <View>
        <Text>List Screen</Text>
      </View>
    )
  }
}

export default connect(null, null)(ListScreen)
