import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native'
import { Container, Content, Icon, View } from 'native-base'

import styles from './styles'
import theme from '@theme/styles'
import { COLOR } from '@theme/typography'

import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

import Header from '@component/Header'
import BreadCrumb from '@component/BreadCrumb'

import { loginUser } from '../../../redux/actions/userActions.js';
import { connect } from 'react-redux';

const PublicSignIn = ({loginUser, loggedIn, user, token, navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [validatorFields, setValidatorFields] = useState(false);

  const needToBeEnabled = () => {
    if (email.length < 1 || password.length < 1) {
      setValidatorFields(true);
    } else {
      setValidatorFields(false);
    }
  }

  useEffect(() => {
    needToBeEnabled();
  }, [email, password, validatorFields])

  useEffect(() => {
    if (loggedIn) {
      navigation.navigate('DrawerRoot', { screen: 'PublicHome', loggedIn: loggedIn, userId: user?._id, token: token});
    }
  }, [loggedIn])

  return(
    <Container>
      <Header navLeftType='back' />
      <Content contentContainerStyle={theme.layoutDf}>

        <Image source={require('@asset/images/Overlay.png')} style={theme.crvBg} resizeMode='cover' />
        <BreadCrumb content={__('Conectare')} desc={__('Conecteaza-te pentru a continua')} />
        <View style={theme.shadowLayout}>
          <View style={theme.bgShadow}>
            <View style={styles.signInDetail}>
              <Text style={styles.formText}>{__('ADRESA DE EMAIL')}</Text>
              <View style={styles.formRow}>
                <TextInput placeholder={__('waitero-client@gmail.com')} placeholderTextColor={COLOR.grey} style={styles.formInput} value={email} onChangeText={(value) => { setEmail(value) }} />
                <Icon name='email' type='MaterialIcons' style={[theme.huge, theme.lightGrey]} />
              </View>
            </View>
            <View style={styles.signInDetail}>
              <Text style={styles.formText}>{__('PAROLA')}</Text>
              <View style={styles.formRow}>
                <TextInput placeholder='*******' placeholderTextColor={COLOR.grey} style={styles.formInput} value={password} onChangeText={(value) => { setPassowrd(value) }} secureTextEntry={true} type="password"/>
                <Icon name='lock' type='MaterialIcons'  style={[theme.huge, theme.lightGrey]} />
              </View>
            </View>
            <TouchableOpacity onPress={() => { navigate('PublicForgotPassword') }}>
              <Text style={styles.forgotText}>{__('Ai uitat parola?')}</Text>
            </TouchableOpacity>
            <View style={styles.signInDetail}>
              <TouchableOpacity style={validatorFields ? styles.signInBtnDisabled : styles.signInBtn} onPress={() => loginUser(email, password)} disabled={validatorFields}>
                <Text style={styles.signInBtnText}>{__('CONECTARE')}</Text>
                <Icon name='arrow-forward' type='MaterialIcons'  style={[theme.huge, theme.light]} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.signInInfo}>
          <Text style={styles.accountText}>{__('Nu ai inca un cont?')}</Text>
          <TouchableOpacity onPress={() => { navigate('PublicSignUp') }}>
            <Text style={styles.signUpText}>{__('Inregistreaza-te')}</Text>
          </TouchableOpacity>
        </View>

      </Content>
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => ({ loginUser: (email, password, loginSent) => dispatch(loginUser(email, password, loginSent)) });
const mapStateToProps =(state)=>({loggedIn: state.userReducer?.loggedIn, user: state.userReducer?.user, token: state.userReducer?.token})

export default connect(mapStateToProps, mapDispatchToProps)(PublicSignIn);