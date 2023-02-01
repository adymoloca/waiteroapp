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
import Button from '@component/Button'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return <Container>
      <Header navLeftType='back' />
      <Content contentContainerStyle={theme.layoutDf}>
        <Image source={require('@asset/images/Overlay.png')} style={theme.crvBg} resizeMode='cover' />
        <BreadCrumb content={__('Setari')} desc={__('Schimba-ti parola')} />
        <View style={theme.shadowLayout}>
          <View style={styles.bgShadow}>
            <View style={styles.settingsContainer}>
              <View style={styles.settingsDetail}>
                <Text style={styles.formText}>{__('PAROLA NOUA')}</Text>
                <View style={styles.formRow}>
                  <TextInput
                    placeholder='***********'
                    placeholderTextColor='rgba(0, 0, 0, 0.7)'
                    style={styles.formInput} />
                  <Icon name='lock' type='FontAwesome5' style={[theme.huge, theme.lightGrey]} />
                </View>
              </View>
              <View style={styles.settingsDetail}>
                <Text style={styles.formText}>{__('CONFIRMA PAROLA NOUA')}</Text>
                <View style={styles.formRow}>
                  <TextInput
                    placeholder='***********'
                    placeholderTextColor='rgba(0, 0, 0, 0.7)'
                    style={styles.formInput} />
                  <Icon name='lock' type='FontAwesome5' style={[theme.huge, theme.lightGrey]} />
                </View>
              </View>
              <View style={styles.settingsBtn}>
                <Button
                  content='SALVEAZA'
                  type='default'
                  // icon={{
                  //   name: 'arrow-right',
                  //   type: 'MaterialCommunityIcons'
                  // }}
                />
              </View>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  }
}
