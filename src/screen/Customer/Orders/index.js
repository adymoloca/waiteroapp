import React from 'react'
import { StatusBar, TouchableOpacity, Image, Text } from 'react-native'
import { Container, Content, Icon, View, Accordion } from 'native-base'

import { ScrollView } from 'react-native-gesture-handler'

import Modal from 'react-native-modalbox'

import styles from './styles'
import theme from '@theme/styles'

import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

import Header from '@component/Header'
import Footer from '@component/Footer'

import BreadCrumb from '@component/BreadCrumb'
import Button from '@component/Button'

import { ORDERS } from './data'
import { RESTAURANT } from '../../Public/RestaurantScreen/data'
export default class extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      isDisabled: false,
      isOpen: false
    },
    this.renderAccordionHeader = this.renderAccordionHeader.bind(this)
    this.renderAccordionContent = this.renderAccordionContent.bind(this)
  }

  onValueChange (value) {
    this.setState({
      selected: value
    })
  }

  renderAccordionHeader (item, expanded) {
    return (
      <View style={styles.accordionTab} key={item.restaurantId + item.orderDate}>
        <View>
          <Text style={styles.accordionTitle}>{item.orderDate}</Text>
        </View>
        {expanded
          ? <Icon name='arrowdown' type='AntDesign' style={[theme.extraLarge, theme.darkLight]} />
          : <Icon name='arrowright' type='AntDesign' style={[theme.extraLarge, theme.darkLight]} />}
      </View>
    )
  }

  renderAccordionContent (item) {
    /* var fn = 'renderAccordionContent' + (item.type.charAt(0).toUpperCase() + item.type.substr(1))
    return <View style={styles.accordionContent}>
      {this[fn]()}
    </View> */
    return(
      <View key={item.restaurantId + item.restaurantName}>
          <View>
            <Text style={styles.customerName}>{item.restaurantName}</Text>
          </View>
          <View style={styles.timeDetail}>
            <View style={styles.timeInfo}>
              <Icon name='calendar' type='Octicons' style={[theme.medium, theme.grey]} />
              <Text style={styles.calendarText}>{item.orderDate}</Text>
            </View>
          </View>
          <View style={styles.qrImgDetail}>
            <Icon name='money-bill-wave' type='FontAwesome5' style={[theme.higantic, theme.dark]} />
              <Text style={styles.bookingPrice}>RON {item.cashPaid}</Text>
          </View>
          <TouchableOpacity style={styles.btnInfo} onPress={() => this.refs.modalRate.open()}>
            <Button
            content={'COMANDA LA '+ item.restaurantName}
              type='default'
              icon={{
                name: 'arrowright',
                type: 'AntDesign'
              }}
              onPress={() => this.openModal(item.restaurantId)}
            />
          </TouchableOpacity>
      </View>
    )
  }

  openModal(restaurantId) {
    
    if (RESTAURANT.restaurantId === restaurantId)
      this.refs.modalRate.open();   
  }

 render () {
    return <Container>
      <Header navLeftType='back' navMiddleType='medium' title='' />
      <View style={theme.layoutDf}>
        <View>
          <BreadCrumb content={__('Comenzi')} desc={__('Lista comenzilor facute de tine')} />
          <Image source={require('@asset/images/Overlay.png')} style={theme.crvBg} resizeMode='cover' />
          <View style={theme.shadowLayout}>
            <View style={styles.bgShadow}>
              <View style={styles.accordionLayout}>
                <Accordion
                  style={styles.accordion}
                  dataArray={ORDERS}
                  expanded={1}
                  renderHeader={this.renderAccordionHeader}
                  renderContent={this.renderAccordionContent}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Modal
        ref={'modalRate'}
        position={'center'}
        isOpen={this.state.isOpen}
        onClosed={() =>
          this.setState({
            isOpen: false
          })
        }
        swipeToClose={false}
        isDisabled={this.state.isDisabled}
        style={styles.modalRate}>
        <View>
            <TouchableOpacity style={styles.closeHiddenDesc} onPress={() => this.refs.modalRate.close()}>
              <Icon name='close' type='MaterialIcons' style={[theme.extraLarge, theme.smokeGrey]} />
            </TouchableOpacity>
            <View style={styles.imgBg}>
              <Image source={{ uri: 'data:image/png;base64,' + RESTAURANT.coverPicture }} style={styles.bookingImg} />
            </View>
            <View style={styles.bgMain}>
              <Text style={styles.bookingTitle}>{RESTAURANT.restaurantName}</Text>
              <Text style={styles.bookingText}>{RESTAURANT.restaurantDescription}</Text>
              <View style={styles.bookingInfoBg}>
                <View style={styles.infoBg}>
                  <View style={styles.bookingTableInfo}>
                    <Icon name='calendar' type='Octicons' style={[theme.huge, theme.darkLight]}/>
                    <Text style={styles.bookingInfoText}>{ORDERS.find((value)=>value.restaurantId === RESTAURANT.restaurantId).orderDate}</Text>
                  </View>
                </View>
                <View style={styles.infoBg}>
                  <View style={styles.bookingTableInfo}>
                    <Icon name='user-friends' type='FontAwesome5' style={[theme.huge, theme.darkLight]} />
                    {/* <Text style={styles.bookingInfoText}>{USER.name}</Text> */}
                  </View>
                </View>
              </View>
              <View style={styles.priceBg}>
                <View style={styles.priceBtn}>
                  <Text style={styles.currencySymbol}>{'RON'}</Text>
                  <Text style={styles.bookingPrice}>{ORDERS.find((value)=>value.restaurantId===RESTAURANT.restaurantId).cashPaid}</Text>
                </View>
              </View>
              <Text style={styles.paidText}>{__('Platit cu Credit Card')}</Text>
            </View>
        </View>

      </Modal>

    </Container>
  }
}
