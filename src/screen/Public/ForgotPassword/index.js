import React from 'react'
import { StatusBar, TouchableOpacity, Image, Text, TextInput } from 'react-native'
import { Container, Content, Icon, View } from 'native-base'

import styles from './styles'
import theme from '@theme/styles'

import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

import Header from '@component/Header'
import Footer from '@component/Footer'
import BreadCrumb from '@component/BreadCrumb'

export default class extends React.Component {
  render () {
    return <Container>
      <Header navLeftType='back' />

      <Content contentContainerStyle={theme.layoutDf}>

        <Image source={require('@asset/images/Overlay.png')} style={theme.crvBg} resizeMode='cover' />
        <BreadCrumb content={__('Ai uitat parola?')} desc={__('Introdu adresa de email pentru a reseta parola')} />
        <View style={theme.shadowLayout}>
          <View style={theme.bgShadow}>
            <View style={styles.forgotDetail}>
              <Text style={styles.formText}>{__('ADRESA DE EMAIL')}</Text>
              <View style={styles.formRow}>
                <TextInput placeholder={__('waitero-client@gmail.com')} placeholderTextColor='#000' style={styles.formInput} />
                <Icon name='mail' type='MaterialIcons' style={[theme.huge, theme.lightGrey]} />
              </View>
            </View>
            <View style={styles.forgotDetail}>
              <TouchableOpacity style={styles.forgotBtn} onPress={() => { navigate('PublicForgotPasswordOtp') }}>
                <Text style={styles.forgotBtnText}>{__('VERIFICA')}</Text>
                <Icon name='arrow-forward' type='MaterialIcons' style={[theme.huge, theme.light]}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.forgotInfo}>
          <Text style={styles.accountText}>{__('Nu ai inca un cont?')}</Text>
          <TouchableOpacity onPress={() => { navigate('PublicSignUp') }}>
            <Text style={styles.signUpText}>{__('Inregistreaza-te!')}</Text>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  }
}
