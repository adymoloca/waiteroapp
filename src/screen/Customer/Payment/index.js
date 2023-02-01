import React, { useEffect, useState, useRef } from 'react'
import { TouchableOpacity, Image, Text, TextInput } from 'react-native'
import { Container, Content, Icon, View } from 'native-base'

import styles from './styles'
import theme from '@theme/styles'

import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

import Header from '@component/Header'

import BreadCrumb from '@component/BreadCrumb'
import Button from '@component/Button'

import DateTimePicker from '@react-native-community/datetimepicker'
import Modal from 'react-native-modalbox'

const CustomerPayment = ({ navigation, route }) => {
  
  const modalPaymentRef = useRef();

  const [selected, setSelected] = useState('');
  const [visibleDailyReminder, setVisibleDailyReminder] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  useEffect(() => { 
    // console.log("route ----> ", route);
  }, [route])


  const onValueChange = () => {
    setSelected('');
  }


  const onDateChange = (event, newDate) => {
    newDate = newDate || date;
    setShow(Platform.OS === 'ios' ? true : false)
    setDate(newDate);
  }

  const onShowChange = (mode) => {
    setShow(true);
    setMode(mode);
  }

  const datepicker = () => {
    show('date');
  }

  return (
    <Container>
      <Header navLeftType='back' />
      <Content contentContainerStyle={theme.layoutDf}>
        <Image source={require('@asset/images/Overlay.png')} style={theme.crvBg} resizeMode='cover' />
        <BreadCrumb content={__('Payment')} desc={__('Choose your payment method')} />
        <View style={theme.shadowLayout}>
          <View style={theme.bgShadow}>
            <View style={styles.accordionLayout}>
              <View style={styles.paymentContent}>
                <View style={styles.paymentInfo}>
                  <Text style={styles.formText}>{__('NAME ON CARD')}</Text>
                  <View style={styles.formRow}>
                    <TextInput
                      placeholder={__('Black Lively')}
                      placeholderTextColor='rgba(0, 0, 0, 0.7)'
                      style={styles.formInput} />
                    <Icon name='user' type='FontAwesome' style={[theme.huge, theme.lightGrey]} />
                  </View>
                </View>
                <View style={styles.paymentInfo}>
                  <Text style={styles.formText}>{__('CARD NUMBER')}</Text>
                  <View style={styles.formRow}>
                    <TextInput
                      placeholder={__('0000 3434 7867 9523')}
                      placeholderTextColor='rgba(0, 0, 0, 0.7)'
                      keyboardType='numeric'
                      style={styles.formInput} />
                    <Icon name='cc-mastercard' type='FontAwesome' style={[theme.huge, theme.lightGrey]} />
                  </View>
                </View>
                <View style={styles.cardDetail}>
                  <View style={styles.cardInfoHalf}>
                    <Text style={styles.formText}>{__('EXPIRY DATE')}</Text>
                    <View style={styles.formRow}>
                      <TextInput
                        placeholder={__('09 / 29')}
                        placeholderTextColor='rgba(0, 0, 0, 0.7)'
                        style={styles.formInput} />
                      <TouchableOpacity onPress={() => datepicker()}>
                        <Icon name='calendar' type='AntDesign' style={[theme.huge, theme.lightGrey]} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.cardInfo}>
                    <Text style={styles.formText}>{__('CVV')}</Text>
                    <View style={styles.formRow}>
                      <TextInput
                        placeholder={__('...')}
                        placeholderTextColor='rgba(0, 0, 0, 0.7)'
                        style={styles.formInput} />
                      <Icon name='eye-off' type='Feather' style={[theme.huge, theme.lightGrey]} />
                    </View>
                  </View>
                </View>
                <View style={styles.paymentBtn}>
                  <Button
                    content='PAY NOW'
                    type='default'
                    icon={{
                      name: 'arrowright',
                      type: 'AntDesign'
                    }}
                    onPress={() => modalPaymentRef.current.open()}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Content>
      <Modal
        ref={modalPaymentRef}
        isOpen={isOpen}
        position={'center'}
        swipeToClose={false}
        style={styles.mNewBox}>
        <TouchableOpacity style={styles.closeIcon} onPress={() => modalPaymentRef.current.close()}>
          <Icon name='close' type='AntDesign' style={[theme.huge, theme.grey]} />
        </TouchableOpacity>
        <View>
          <View>
            <View style={styles.modalInfo}>
              <Image source={require('@asset/images/checkmark.png')} resizeMode='contain' style={styles.deliveryImg} />
            </View>
            <Text style={styles.confirmTitle}>{__('Confirmata')}</Text>
            <Text style={styles.confirmText}>{__('Multumim, comanda ta a fost platita')}</Text>
          </View>
          <View style={styles.confirmBtn}>
            <Button
              content='ACASA'
              type='default'
              icon={{
                name: 'arrowright',
                type: 'AntDesign'

              }}
              onPress={() => { navigate('PublicHome') }}
            />
          </View>
        </View>
      </Modal>
      {
        show && <DateTimePicker value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onDateChange} />
      }

    </Container>
  )
}

export default CustomerPayment;
