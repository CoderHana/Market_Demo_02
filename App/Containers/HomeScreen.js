import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import SliderBannerPromotion from '../Components/SliderBannerPromotion'
import ResturantActions from '../Redux/ResturantRedux'


class HomeScreen extends Component {
  componentDidMount () {
    this.props.resturantRequest()
  }

  render () {
    if(this.props.fetching || !this.props.resturant){
      return (
        <View>
          <Text>Loading ...</Text>
        </View>
      )
    }else{
    const {resturant: {menus}} = this.props
    const banners = menus
          .filter(m => m.type === 'WEB_BANNER')
          .map(m =>  m.banners[0].image)

    return (
      <View>
        <SliderBannerPromotion items={banners} />
      </View>
    )
    }
  }
}

const dataDispatchToProp = (dispatch) => ({
  resturantRequest: () => dispatch(ResturantActions.resturantRequest())
})

const dataStateToProp = (state) => ({
  resturant: state.resturant.resturantData,
  fetching: state.resturant.fetching
})

export default connect(dataStateToProp, dataDispatchToProp)(HomeScreen)
