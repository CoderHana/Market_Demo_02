import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import PropTypes from 'prop-types'
import { View, Text, FlatList } from 'react-native'
import { Card } from 'react-native-elements'
import styles from './Styles/SliderBannerPromotion'

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

  static propTypes = {
    items: PropTypes.array
  }

  constructor (props) {
    super(props)
    this.state = {
      data: data
    }
  }

  render () {
    console.tron.log("fafar")
    console.tron.log(this.props)
    const { items } = this.props
    return (
      <View>
        <Text>This is a new Component:</Text>
        <FlatList
          inverted
          horizontal
          showsHorizontalScrollIndicator={false}
          data={items}
          renderItem={({ item }) => (
            <Card
              containerStyle={styles.cardContainer}
              imageStyle={styles.cardImage}
              image={{ uri: item }} />
            )
            }
          keyExtractor={(item, index) => index}
         />
      </View>
    )
  }
}
