import React, {useState, Fragment} from 'react'
import { StatusBar, TouchableOpacity, Image, Text, TextInput } from 'react-native'
import { Container, Content, View } from 'native-base'
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles'
import theme from '@theme/styles'

import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

import Header from '@component/Header'
import BreadCrumb from '@component/BreadCrumb'
import Button from '@component/Button'
import { COLOR, SIZE } from '../../../themes/typography';

import { ORDERS } from './data';

const WaiterMode = () => {

    const [nowOpen, setNowOpen] = useState(-1)

    const getOrderHead = (order, index) => {
        return(
            <View style={order.taken ? styles.accordionHeaderTaken : styles.accordionHeader}>
                <Text style={order.taken ? styles.accordionHeaderTextTaken : styles.accordionHeaderText}>{order.tableNumber}</Text>
                <Icon name={nowOpen === index ? 'chevron-up' : 'chevron-down'} size={SIZE.large} color={ order.taken ? COLOR.greyLight : COLOR.dark } />
            </View>
        )
    }

    const getOrderBody = (order) => {
        return(
            <View style={styles.accordionDetails}>
                {order.clients.map((item, index) => {
                    return (
                            <Fragment key={index.toString() + 'othersorders'}>
                                {item.plates.map((plate, index) => {
                                    return (
                                        <Fragment key={index.toString() + 'othersordersplates'}>
                                            <View style={styles.row}>
                                                <View style={styles.NameColumnDt}>
                                                    <Text style={styles.DetailsItemHeader}>{plate.plateName}</Text>
                                                </View>
                                                <View style={styles.QuantityColumnDt}>
                                                    <Text style={styles.DetailsItemHeader}>{plate.plateQuantity}x</Text>
                                                </View>
                                                <View style={styles.PriceColumnDt}>
                                                    <Text style={styles.DetailsItemHeader}>{plate.platePrice} RON</Text>
                                                </View>
                                            </View>
                                            {plate.extras.map((extra, index) => {
                                                return (
                                                    <View style={styles.extraPlateContainer} key={index.toString() + 'othersordersplatesextra'}>
                                                        <View style={[styles.row, { width: '78%' }]}>
                                                            <Text style={styles.extraText}>{extra.extraName}</Text>
                                                            <Text style={styles.extraText}>{(extra.extraQuantity || '') + 'x'}</Text>
                                                        </View>
                                                        <View style={[styles.flexEnd, { width: '22%' }]}>
                                                            <Text style={styles.extraText}>{extra.extraPrice} RON</Text>
                                                        </View>
                                                    </View>
                                                )
                                            })}
                                        </Fragment>
                                    )
                                })}
                                {item.drinks.map((drink, index) => {
                                    return (
                                        <Fragment key={index.toString() + 'othersordersdrinks'}>
                                            <View style={styles.row}>
                                                <View style={styles.NameColumnDt}>
                                                    <Text style={styles.DetailsItemHeader}>{drink.drinkName}</Text>
                                                </View>
                                                <View style={styles.QuantityColumnDt}>
                                                    <Text style={styles.DetailsItemHeader}>{drink.drinkQuantity}x</Text>
                                                </View>
                                                <View style={styles.PriceColumnDt}>
                                                    <Text style={styles.DetailsItemHeader}>{drink.drinkPrice} RON</Text>
                                                </View>
                                            </View>
                                        </Fragment>
                                    )
                                })}
                                {item.extras.map((extra, index) => {
                                    return (
                                        <Fragment key={index.toString() + 'othersordersextra'}>
                                            <View style={styles.row}>
                                                <View style={styles.NameColumnDt}>
                                                    <Text style={styles.DetailsItemHeader}>{extra.extraName}</Text>
                                                </View>
                                                <View style={styles.QuantityColumnDt}>
                                                    <Text style={styles.DetailsItemHeader}>{extra.extraQuantity}x</Text>
                                                </View>
                                                <View style={styles.PriceColumnDt}>
                                                    <Text style={styles.DetailsItemHeader}>{extra.extraPrice} RON</Text>
                                                </View>
                                            </View>
                                        </Fragment>
                                    )
                                })}
                                <View style={styles.row}>
                                    <View style={styles.checkoutColumn}>
                                        <Text style={styles.DetailsItemHeader}>checkout</Text>
                                    </View>
                                    <View style={styles.PriceColumnDt}>
                                        <Text style={styles.DetailsItemHeader}>{item.clientCheckout} RON</Text>
                                    </View>
                                </View>
                            </Fragment>
                        )
                    })
                }
                {order.taken ? <View><Text style={{ fontSize: 18, color: COLOR.red }}>!!!LUAT</Text></View> : <TouchableOpacity style={ styles.takeButton }><Text style={ { color: COLOR.light, textAlign: 'center' } }>Take</Text></TouchableOpacity> }
            </View>
        )
    }

    return (
    <Container>
      <Header navLeftType='back' />
      <Content contentContainerStyle={theme.layoutDf}>
                <BreadCrumb content={__('Waitero chelner')} desc={__('Comenzile se afla in sectiunea de mai jos')}/>
        <View style={styles.bookingContainer}>
                    <AccordionList list={ORDERS} header={(order, index) => getOrderHead(order, index)} body={getOrderBody} onToggle={(order, index, isExpanded)=> isExpanded ? setNowOpen(index) : setNowOpen(-1)}  keyExtractor={item => item.tableId}/>
        </View>

      </Content>
    </Container>
    )
}

export default WaiterMode;