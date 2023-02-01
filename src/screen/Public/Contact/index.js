import React from 'react'
import { StatusBar, TouchableOpacity, Image, Text, TextInput, ScrollView } from 'react-native'
import { Container, Content, Icon, View } from 'native-base'

import styles from './styles'
import theme from '@theme/styles'

import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

import Header from '@component/Header'
import Footer from '@component/Footer'

import BreadCrumb from '@component/BreadCrumb'
import Button from '@component/Button'

import Modal from 'react-native-modalbox'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisabled: false,
      isOpen: false
    }
  }
  onValueChange() {
    this.setState({
      selected: ''
    })
  }
  render() {
    return <Container>
      <Header navLeftType='back' />
      <Content contentContainerStyle={theme.layoutDf}>
        <Image source={require('@asset/images/Overlay.png')} style={theme.crvBg} resizeMode='cover' />
        <BreadCrumb content={__('Contact')} desc={__('Feel free to drop us line below')} />
        <View style={theme.shadowLayout}>
          <View style={theme.bgShadow}>
            <View style={styles.contactDetail}>
              <Text style={styles.formText}>{__('NAME')}</Text>
              <View style={styles.formRow}>
                <TextInput
                  placeholder={__('Black Lively')}
                  placeholderTextColor='rgba(0, 0, 0, 0.7)'
                  style={styles.formInput} />
                <Icon name='user' type='FontAwesome' style={[theme.huge, theme.lightGrey]} />
              </View>
            </View>
            <View style={styles.contactDetail}>
              <Text style={styles.formText}>{__('EMAIL ADDRESS')}</Text>
              <View style={styles.formRow}>
                <TextInput
                  placeholder={__('black.lively.123@gmail.com')}
                  placeholderTextColor='rgba(0, 0, 0, 0.7)'
                  style={styles.formInput} />
                <Icon name='mail' type='Entypo' style={[theme.huge, theme.lightGrey]} />
              </View>
            </View>
            <View style={styles.contactDetail}>
              <Text style={styles.formText}>{__('MOBILE NUMBER')}</Text>
              <View style={styles.formRow}>
                <TextInput
                  placeholder={__('9076726514')}
                  placeholderTextColor='rgba(0, 0, 0, 0.7)'
                  keybordType='numeric'
                  style={styles.formInput} />
                <Icon name='mobile-alt' type='FontAwesome5' style={[theme.huge, theme.lightGrey]} />
              </View>
            </View>
            <View style={styles.contactDetail}>
              <Text style={styles.formText}>{__('MESSAGE')}</Text>
              <View style={styles.formRow}>
                <TextInput
                  placeholder={__('Write your messages')}
                  placeholderTextColor='rgba(0, 0, 0, 0.7)'
                  multiline
                  numberOfLines={6}
                  textAlignVertical={'top'}
                  style={styles.formInput} />
                  <View style={styles.formMsg}>
                  <Icon name='message' type='MaterialIcons'  style={[theme.huge, theme.lightGrey]}  />
                  </View>
              </View>
            </View>
            <View style={styles.contactBtn}>
              <Button
                content={__('CREATE ACCOUNT')}
                type='default'
                icon={{
                  name: 'arrowright',
                  type: 'AntDesign'
                }}
                onPress={() => this.refs.ModalConfirm.open()}
              />
            </View>
          </View>
        </View>
        <View style={styles.contactInfo}>
          <Text style={styles.smnTitle}>REACH US ON{__('MESSAGE')}</Text>
          <View style={styles.iconInfo}>
            <TouchableOpacity style={styles.smnBtnHalf}>
              <Icon name='facebook-square' type='AntDesign' style={[theme.compact, theme.light]} />
              <Text style={styles.smnText}>{__('FACEBOOK')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.smnBtn}>
              <Icon name='twitter' type='AntDesign' style={[theme.compact, theme.light]} />
              <Text style={styles.smnText}>{__('TWITTER')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Content>
      <Modal
        ref={'ModalConfirm'}
        isOpen={this.state.isOpen}
        position={'center'}
        swipeToClose={false}
        style={styles.mNewBox}>
        <TouchableOpacity style={styles.closeIcon}  onPress={() => this.refs.ModalConfirm.close()}>
          <Icon name='close' type='AntDesign' style={[theme.huge, theme.grey]}  />
        </TouchableOpacity>
        <View>
          <View>
            <View style={styles.orderCheck}>
              <Image source={require('@asset/images/checkmark.png')} resizeMode='contain' style={styles.deliveryImg} />
            </View>
            <Text style={styles.confirmThank}>{__('Thank you !')}</Text>
            <Text style={styles.confirmDesc}>{__('Your message can be sent successfully. We will contact you soon.')}</Text>
          </View>
        </View>
      </Modal>
    </Container>
  }
}
