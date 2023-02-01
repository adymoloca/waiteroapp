import React, { useEffect } from 'react'
import { StatusBar, TouchableOpacity } from 'react-native'
import { Container, Content, Icon, View } from 'native-base'

import styles from './styles'
import theme from '@theme/styles'

import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

import Header from '@component/Header'
import Footer from '@component/Footer'
import BreadCrumb from '@component/BreadCrumb'

const PublicPayment = ({ navigation, route }) => {
  
  useEffect(() => {
    // console.log("route ----->", route)
  }, [route])

  return(
    <Container>
      <Header navLeftType='back' />

      <Content contentContainerStyle={theme.layoutDf}>
        <BreadCrumb content={__('Payment Gateway')} desc={__('Choose your payment gateway')} />

      </Content>
    </Container>
  )
}

export default PublicPayment;