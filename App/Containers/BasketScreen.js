import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import RestaurantActions from '../Redux/ResturantRedux'
import Icon from "react-native-vector-icons/Entypo";

class BasketScreen extends Component {

  static navigationOptions = {
    tabBarLabel: "سبد خرید",
    tabBarIcon: <Icon name="shop" size={24} />
  }

  render () {
    return (
      <View>
        <Text>Basket Screen</Text>
      </View>
    )
  }
}

export default connect(null, null)(BasketScreen)
