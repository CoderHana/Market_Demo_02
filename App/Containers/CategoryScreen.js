import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import RestaurantActions from '../Redux/ResturantRedux'
import Icon from "react-native-vector-icons/Entypo";

class CategoryScreen extends Component {

  static navigationOptions = {
    tabBarLabel: "دسته بندی",
    tabBarIcon: <Icon name="grid" size={24}/>
  }

  render () {
    return (
      <View>
        <Text>Category Screen</Text>
      </View>
    )
  }
}

export default connect(null, null)(CategoryScreen)
