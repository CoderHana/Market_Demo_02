import React, {Component} from 'react'
import {View, Text, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import RestaurantActions from '../Redux/ResturantRedux'
import Header from '../Components/Header'
import CategoryGrid from '../Components/CategoryGrid'
import SliderBannerPromotion from '../Components/SliderBannerPromotion'
import Icon from "react-native-vector-icons/Entypo";

class HomeScreen extends Component {

  static navigationOptions = {
    tabBarLabel: "خانه",
    tabBarIcon: <Icon name="home" size={24} />
  }

  componentDidMount() {
    this.props.resturantRequest()
  }

  render() {
    if (this.props.fetching || !this.props.resturant) {
      return (
        <View>
          <Text>Loading ...</Text>
        </View>
      )
    } else {
      const {resturant: {menus}} = this.props
      const banners = menus
        .filter(m => m.type === 'WEB_BANNER')
        .map(m => m.banners[0].image)
      const bannersMedium = menus
        .filter(m => m.type === 'CAMPAIGN_BANNER')
        .map(m => m.banners[0].image)

      const categories = menus
        .filter(m => m.type === 'CATEGORY_LIST_VERTICAL' && m.title === 'دسته بندی های برتر')
        .map(m => m.banners)[0]
        .filter(m => m.image)


      return (
        <ScrollView>
          <Header />
          <SliderBannerPromotion items={banners} />
          <SliderBannerPromotion items={bannersMedium} small />
          <CategoryGrid items={categories} />
        </ScrollView>
      )
    }
  }
}

const dataDispatchToProp = (dispatch) => ({
  resturantRequest: () => dispatch(RestaurantActions.resturantRequest())
})

const dataStateToProp = (state) => ({
  resturant: state.resturant.resturantData,
  fetching: state.resturant.fetching
})

export default connect(dataStateToProp, dataDispatchToProp)(HomeScreen)
