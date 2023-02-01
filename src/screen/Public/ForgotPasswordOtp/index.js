import React from 'react'
import { StatusBar, TouchableOpacity, Image, Text, TextInput } from 'react-native'
import { Container, Content, Icon, View } from 'native-base'

import styles from './styles'
import theme from '@theme/styles'

import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

import Header from '@component/Header'
import BreadCrumb from '@component/BreadCrumb'

export default class extends React.Component {
  render () {
    return <Container>
      <Header navLeftType='back' />

      <Content contentContainerStyle={theme.layoutDf}>
        <BreadCrumb content={__('Verificare cont')} desc={__('Un mesaj cu codul de verificare a fost trimis catre 0746 888 999. Asteptati maxim 30 de secunde!')} />
        <Image source={require('@asset/images/Overlay.png')} style={theme.crvBg} resizeMode='cover' />
        <View style={theme.shadowLayout}>
          <View style={theme.bgShadow}>
            <View style={styles.formRow}>
              <TextInput placeholder='1' keyboardType='numeric' style={styles.formInput} />
              <TextInput placeholder='5' keyboardType='numeric' style={styles.formInput} />
              <TextInput placeholder='8' keyboardType='numeric' style={styles.formInput} />
              <TextInput placeholder='3' keyboardType='numeric' style={styles.formInput} />
            </View>
            <View />
            <View style={styles.otpContent}>
              <TouchableOpacity style={styles.verifyBtn} onPress={() => { navigate('PublicSignIn') }}>
                <Text style={styles.verifyBtnText}>{__('VERIFICA')}</Text>
                <Icon name='arrow-forward' type='MaterialIcons' style={[theme.huge, theme.light]} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.otpInfo}>
            <Text style={styles.codeText}>{__('Inca nu ai primit codul?')}</Text>
            <TouchableOpacity>
              <Text style={styles.signUpText}>{__('Retrimite!')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Content>
    </Container>
  }
}
