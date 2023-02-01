import React from 'react'
import { FlatList } from 'react-native'
import { View, Icon, Text } from 'native-base'

import styles from '../styles'
import Item from './Item'

import { __ } from '@utility/translation'

const Food = (props) => {

    return (
      <>
          {
            props.list ? (
            props.list?.map((item, index) => {  
                return (
                      <Item
                      item={item}
                      key={index.toString() + 'restaurantinhome'}
                    />
                  )
              })
             ) : null
          }
      </>
    )
}

export default Food;
