import React from 'react'
import { StatusBar, TouchableOpacity, Text, TextInput, Image, ScrollView } from 'react-native'
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

const PublicResetPassword = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');

  return(
  <Container>
      <Header navLeftType='back' />

      <Content contentContainerStyle={theme.layoutDf}>
        
        <Image source={require('@asset/images/Overlay.png')} style={theme.crvBg} resizeMode='cover' />
        <BreadCrumb content={__('Reset Password')} desc={__('reset your password')} />
        <View style={theme.shadowLayout}>
          <View style={theme.bgShadow}>
            <View style={styles.resetDetail}>
              <Text style={styles.formText}>{__('NEW PASSWORD')}</Text>
              <View style={styles.formRow}>
                <TextInput value={newPassword} onChange={(value)=>setNewPassword(value)}
                  placeholder={__('blake.lively.125@gmail.com')} placeholderTextColor='#000' style={styles.formInput} />
                <Icon name='lock' type='MaterialIcons' style={[theme.huge, theme.lightGrey]} />
              </View>
            </View>
            <View style={styles.resetDetail}>
              <Text style={styles.formText}>{__('CONFIRM NEW PASSWORD')}</Text>
              <View style={styles.formRow}>
                <TextInput value={newPasswordConfirm} onChange={(value)=>setNewPasswordConfirm(value)}
                  placeholder='*******' placeholderTextColor='#000' style={styles.formInput} />
                <Icon name='lock' type='MaterialIcons' style={[theme.huge, theme.lightGrey]} />
              </View>
            </View>
            <Text style={styles.forgotText}>{__('Forgot Password?')}</Text>
            <View style={styles.resetDetail}>
              <TouchableOpacity style={styles.resetBtn} onPress={() => setIsOpen(true)}>
                <Text style={styles.resetBtnText}>{__('SIGN IN')}</Text>
                <Icon name='arrow-forward' type='MaterialIcons' style={[theme.huge, theme.light]} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.resetInfo}>
            <Text style={styles.accountText}>{__('Don\'t have an account?')}</Text>
            <TouchableOpacity>
              <Text style={styles.signUpText}>{__('Sign Up')}</Text>
            </TouchableOpacity>
          </View>
        </View>

      </Content>
      <Modal
        isOpen={isOpen}
        position={'center'}
        swipeToClose={false}
        style={styles.mNewBox}>
        <View>
          <View>
            <View style={styles.orderCheck}>
              <Image source={require('@asset/images/checkmark.png')} resizeMode='contain' style={styles.deliveryImg} />
            </View>
            <Text style={styles.confirmThank}>{__('Success !')}</Text>
            <Text style={styles.confirmText}>{__('Your new password can be changed successfully.')}</Text>
          </View>
          <View style={styles.confirmBtn}>
            <Button
              content='LOGIN NOW'
              type='default'
              icon={{
                name: 'arrowright',
                type: 'AntDesign'
              }}
              onPress={() => { navigate('PublicSignIn') }}
            />
          </View>
        </View>
      </Modal>
  </Container>
  )
}

export default PublicResetPassword;