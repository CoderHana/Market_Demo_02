import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { View, Text, FlatList } from 'react-native'
import { Card } from 'react-native-elements'
// import styles from './Styles/SliderBannerPromotion'

const data = [
  {
    imageUrl: 'https://api.snapp.market/uploads/images/mobile-sliders/5cf37dc5400fb.jpg'
  },
  {
    imageUrl: 'https://api.snapp.market/uploads/images/mobile-sliders/5cf37e967b1e1.jpg'
  },
  {
    imageUrl: 'https://api.snapp.market/uploads/images/mobile-sliders/5cf37f1cec52d.jpg'
  },
  {
    imageUrl: 'https://api.snapp.market/uploads/images/mobile-sliders/5cf274d71eec4.jpg'
  }
]

export default class SliderBannerPromotion extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: data
    }
  }

  render () {
    return (
      <View>
        <Text>This is a new Component:</Text>
        <FlatList
          inverted
          horizontal
          showsHorizontalScrollIndicator={false}
          data={this.state.data}
          renderItem={({ item }) => (
            <Card
              containerStyle={{borderRadius: 10, border: 0, elevation: 0, height: 182, marginLeft: 0}}
              imageStyle={{
                borderRadius: 10,
                overflow: 'hidden',
                height: 180,
                width: 350
              }}
              image={{ uri: item.imageUrl }} />
            )
            }
          keyExtractor={(item, index) => index}
         />
      </View>
    )
  }
}
