import React, {useEffect, useState} from 'react'
import { TouchableOpacity, Image, Text, TextInput, ActivityIndicator } from 'react-native'
import { Container, Content, Icon, View } from 'native-base'

import styles from './styles'
import theme from '@theme/styles'

import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

import Header from '@component/Header'
import BreadCrumb from '@component/BreadCrumb'
import { COLOR, SIZE } from '../../../themes/typography'
import { connect } from 'react-redux'

import { createUser } from '../../../redux/actions/userActions'

const PublicSignUp = ({navigation, user, createUser}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [validatorFields, setValidatorFields] = useState(false);

  const createUserAction = () => {
    createUser(name, email, password, phone)
  }

  const needToBeEnabled = () => {
    if (name.length < 1 || email.length < 1 || phone.length < 1 || password.length < 1) {
      setValidatorFields(true);
    } else {
      setValidatorFields(false);
    }
  }

  useEffect(() => {
    needToBeEnabled();
  }, [name, email, phone, password, validatorFields])

  useEffect(() => {
    if(user?.loggedIn)
      navigation.navigate('DrawerRoot', { screen: 'PublicHome', loggedIn: user?.loggedIn, userId: user?.user?._id, token: user?.token})
  }, [user])

  return(
      <Container>
        <Header navLeftType='back' />
        <Content contentContainerStyle={theme.layoutDf}>
          <Image source={require('@asset/images/Overlay.png')} style={theme.crvBg} resizeMode='cover' />
          <BreadCrumb content={__('Creeaza cont')} desc={__('Creeaza un cont completand formularul de mai jos')} />
          <View style={theme.shadowLayout}>
            <View style={theme.bgShadow}>
              <View style={styles.signUpRow}>
                <Text style={styles.formText}>{__('NUME')}</Text>
                <View style={styles.formRow}>
                <TextInput placeholder={__('Waitero Client')} placeholderTextColor={COLOR.grey} style={styles.formInput} type="text" value={name} onChangeText={(value) => { setName(value) }} />
                  <Icon name='user' type='FontAwesome' style={[theme.huge, theme.greyLight]} />
                </View>
              </View>
              <View style={styles.signUpRow}>
                <Text style={styles.formText}>{__('ADRESA DE EMAIL')}</Text>
                <View style={styles.formRow}>
                  <TextInput placeholder={__('waitero-client@gmail.com')} placeholderTextColor={COLOR.grey} style={styles.formInput} type= "email" value={email} onChangeText={(value) => { setEmail(value) }}/>
                  <Icon name='email' type='MaterialIcons' style={[theme.huge, theme.greyLight]} />
                </View>
              </View>
              <View style={styles.signUpRow}>
                <Text style={styles.formText}>{__('NUMARUL DE TELEFON')}</Text>
                <View style={styles.formRow}>
                  <TextInput placeholder={__('0746 888 999')} placeholderTextColor={COLOR.grey} style={styles.formInput} type="tel" value={phone} onChangeText={(value) => { setPhone(value) }}/>
                  <Icon name='phone-iphone' type='MaterialIcons' style={[theme.huge, theme.greyLight]} />
                </View>
            </View>
            <View style={styles.signUpRow}>
                <Text style={styles.formText}>{__('PAROLA')}</Text>
                <View style={styles.formRow}>
                  <TextInput placeholder={__('oParoLa123@')} placeholderTextColor={COLOR.grey} style={styles.formInput} type="password" value={password} onChangeText={(value) => { setPassword(value)}} secureTextEntry={true}/>
                  <Icon name='lock' type='MaterialIcons' style={[theme.huge, theme.greyLight]} />
                </View>
              </View>
              <View style={styles.signUpRow}>
              <TouchableOpacity style={validatorFields ? styles.accountBtnDisabled : styles.accountBtn} onPress={ createUserAction } disabled={validatorFields}>
                {user.loading ? <ActivityIndicator size={SIZE.medium} color={COLOR.light}/> : <>
                  <Text style={styles.accountBtnText}>{__('CREEAZA CONT')}</Text>
                  <Icon name='arrow-forward' type='MaterialIcons' style={[theme.huge, theme.light]} />
                </>}
              </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.smnInfo}>
            <Text style={styles.signupText}>{__('prin inregistrare sunt de acord cu Termenii si Conditiile WAITERO')}</Text>
          </View>
        </Content>
    </Container>
  )
}

const mapStateToProps = (state) => ({ user: state.userReducer })
const mapDispatchToProps = (dispatch) => ({
  createUser: (name, email, password, phone) => dispatch(createUser(name, email, password, phone))
})

export default connect(mapStateToProps, mapDispatchToProps)(PublicSignUp);