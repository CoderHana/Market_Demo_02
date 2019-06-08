import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import RestaurantActions from '../Redux/ResturantRedux'
import Icon from "react-native-vector-icons/Entypo";

class SearchScreen extends Component {

  static navigationOptions = {
    tabBarLabel: "جستجو",
    tabBarIcon: <Icon name="magnifying-glass" size={24}/>
  }

  render () {
    return (
      <View>
        <Text>Search Screen</Text>
      </View>
    )
  }
}

export default connect(null, null)(SearchScreen)
