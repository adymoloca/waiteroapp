import React, { useState } from 'react'
import { StatusBar, TouchableOpacity, Image, Text, TextInput, ActivityIndicator } from 'react-native'
import { Container, Content, Icon, View } from 'native-base'

import styles from './styles'
import theme from '@theme/styles'
import { COLOR } from '@theme/typography'

import { __ } from '@utility/translation'

import Header from '@component/Header'

import BreadCrumb from '@component/BreadCrumb'
import Button from '@component/Button'

import { connect } from 'react-redux'
import { updateUserDetails } from '../../../redux/actions/userActions'

const CustomerProfile = ({ user, updateUser }) => {
  const [name, setName] = useState(user?.user?.name);
  const [email, setEmail] = useState(user?.user?.email);
  const [phone, setPhone] = useState(user?.user?.phone);
    
    return <Container>
      <Header navLeftType='back' />
      <Content contentContainerStyle={theme.layoutDf}>
        <Image source={require('@asset/images/Overlay.png')} style={theme.crvBg} resizeMode='cover' />
        <BreadCrumb content={__('Profilul meu')} desc={__('Editeaza datele personale')} />
        <View style={theme.shadowLayout}>
          <View style={styles.bgShadow}>
            <View style={styles.profileContent}>
              <TouchableOpacity style={{...styles.profileImg, elevation:5}}>
                <Image source={require('@asset/images/avatar.png')} style={styles.profileImg} />
              </TouchableOpacity>
                <View style={styles.profileRow}>
                <Text style={styles.formText}>{__('NUME')}</Text>
                <View style={styles.formRow}>
                  <TextInput
                    value={name}
                    onChangeText={value => setName(value)}
                    style={styles.formInput} />
                  <Icon name='user' type='FontAwesome' style={[theme.huge, theme.lightGrey]} />
                </View>
              </View>
              <View style={styles.profileRow}>
                <Text style={styles.formText}>{__('ADRESA DE EMAIL')}</Text>
                <View style={styles.formRow}>
                  <TextInput
                    value={email}
                    onChangeText={value => setEmail(value)}
                    style={styles.formInput} />
                  <Icon name='mail' type='Entypo' style={[theme.huge, theme.lightGrey]}/>
                </View>
              </View>
              <View style={styles.profileRow}>
                <Text style={styles.formText}>{__('NUMAR DE TELEFON')}</Text>
                <View style={styles.formRow}>
                  <TextInput
                    value={phone}
                    onChangeText={value => setPhone(value)}
                    keybordType='numeric'
                    style={styles.formInput} />
                  <Icon name='mobile-alt' type='FontAwesome5' style={[theme.huge, theme.lightGrey]} />
                </View>
              </View>
              <View style={styles.profileBtn}>
                <Button
                  onPress={()=>updateUser(user?.token, user?.user?._id, name, email, phone )}
                  content={user?.loading ? <ActivityIndicator key ={'loading-on-save-clicked'} color={COLOR.light} /> : 'SALVEAZA'}
                  type='default'
                  icon={{
                    name: 'arrowright',
                    type: 'AntDesign'
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </Content>
    </Container>
}

const mapStateToProps = (state) => ({user: state?.userReducer})
const mapDispatchToProps = (dispatch) => ({
  updateUser: (token, userId, name, email, phone) => dispatch(updateUserDetails(token, userId, name, email, phone))
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerProfile);