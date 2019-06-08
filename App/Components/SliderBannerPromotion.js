import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList } from 'react-native'
import { Card } from 'react-native-elements'
import styles from './Styles/SliderBannerPromotion'

export default class SliderBannerPromotion extends Component {

  static propTypes = {
    items: PropTypes.array,
    small: PropTypes.boolean
  }

  render () {
    console.tron.log("fafar")
    console.tron.log(this.props)
    const { items, small } = this.props
    return (
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={items}
          renderItem={({ item }) => (
            <Card
              containerStyle={styles.cardContainer}
              imageStyle={small ? styles.cardImageSmall : styles.cardImage}
              image={{ uri: item }} />
            )
            }
          keyExtractor={(item, index) => index}
         />
      </View>
    )
  }
}
