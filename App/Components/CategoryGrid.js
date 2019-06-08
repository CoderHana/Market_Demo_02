import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, FlatList} from 'react-native'
import {Card} from 'react-native-elements'


export default class CategoryGrid extends Component {

  static propTypes = {
    items: PropTypes.array
  }

  render () {
    const { items } = this.props
    console.tron.log('hiiii')
    console.tron.log('items: ', items);
    return (
      <View>
          <Text style={{color: '#636363', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 15}}>دسته‌بندی‌های برتر</Text>
          <FlatList
            style={{padding: 15, marginRight: -15, paddingTop: 0}}
            showsVerticalScrollIndicator={false}
            data={items}
            renderItem={({ item }) => (
              <Card
                containerStyle = {{marginBottom: 30, borderRadius: 10, border: 0, elevation: 0, height: 100, marginLeft: 0, width:100, flex: 1, flexDirection: 'column', margin: 15}}
                imageStyle={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  height: 90,
                  width: 90,
                  alignItems: 'center' // This does the magic
                }}
                // title={item.title}
                image={{ uri: item.image }} >
                <Text style={{textAlign: 'center', marginTop: 5, color: 'black'}}>{ item.title }</Text>
              </Card>
            )
            }
            numColumns={3}
            keyExtractor={(item, index) => index}
          />

      </View>
    )
  }
}
