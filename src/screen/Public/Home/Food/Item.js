import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { Text, View } from 'native-base'

import styles from '../styles';
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import { data } from '../../../../redux/baseUrl';
import axios from 'axios';

import { Rating } from 'react-native-ratings';

import { useNavigation } from '@react-navigation/native';

const Item = (props) => {

  const [minimumPrice, setMinimumPrice] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    if (props && props?.clientId && props?._id) {
      axios.get(`${data.clientUrl}/${props?.clientId}/restaurant/${props?._id}/get-minimum-price-plate`).then(response => {
        const min = response.data.plates.platePrice;
        setMinimumPrice(min);
      }).catch(err => { console.log("Error") })
    }
  }, [props])

  useEffect(() => {
    
  },[])

  const goToRestaurant = () => {
    navigation.navigate('RestaurantScreen', {restaurant: props})
  }


    return (
      <>
      <View style={styles.foodContainer}>
          <TouchableOpacity style={styles.imgDisplay} onPress={() => { goToRestaurant() }}>
          <Image source={{ uri: props?.item?.coverPicture }} style={styles.restaruntImg} />
        </TouchableOpacity>
      <View style={styles.foodContent}>
        <View style={styles.foodDetail}>
          <Text style={styles.imgName}>{props?.item?.restaurantName}</Text>
              <Rating type='star' startingValue={props?.item?.rating?.length || 0} imageSize={25} readonly={true} showRating={false} style={{ paddingTop: 8 }} />
        </View>
        <View style={styles.foodItem}>
          <Text style={styles.foodType}>{ props?.item?.cuisines?.join(', ')?.slice(0, 14)}...</Text>
          <Text style={styles.dotLine}>-</Text>
          <Text style={styles.foodType}>RON {minimumPrice} </Text>
          <Text style={styles.dotLine}>-</Text>
          <Text style={styles.foodType}>{props?.item?.location?.address?.city || "Romania"}</Text>
        </View>
      </View>
    </View>
      </>
    )
}

export default Item 