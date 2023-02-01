import React, {useState, Fragment, useEffect} from 'react'
import { ActivityIndicator, TouchableOpacity, Image, Text } from 'react-native'
import { Container, Content, View } from 'native-base'
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles'
import theme from '@theme/styles'

import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

import Header from '@component/Header'
import BreadCrumb from '@component/BreadCrumb'
import Button from '@component/Button'
import { COLOR, SIZE } from '../../../themes/typography';

import { MY_ORDER } from './data';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { data } from '../../../redux/baseUrl';

const ActualOrder = ({navigation, route}) => {

    const [myOrderExpanded, setMyOrderExpanded] = useState(true)
    const [theyOrderExpanded, setTheyOrderExpanded] = useState(false)
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(0);
    const myID = '123456789';

    const actual = useSelector(state => state.userReducer?.actualOrder);

    // console.log('route ->>->> ->> ', route);

    const getActualCheckouts = () => {
        let tableNumber = actual?.tableNumber;
        /* console.log(cartCheckout) */
        setLoading(true)
            axios.get(`${data?.baseUrl}/${actual?.userId}/client/${actual?.clientId}/restaurant/${actual?.restaurantId}/checkout/get-actual-checkout/${tableNumber?.toString()}`)
                .then((res) => {
                    setOrders(res?.data?.checkouts)
                  /*   console.log(res); */
                })
                .catch(err => {
                    console.log(err);
                }).finally(()=>setLoading(false))
    }

    const calculateTotalPers = () => {
        let totalC = 0;
        const myOrd = orders?.filter((el) => el?.userId === actual?.userId);
        for(let i = 0; i<myOrd?.length; i++){
            for(let j = 0; j<myOrd[i]?.myCart?.plates?.length; j++){
                totalC += myOrd[i]?.myCart?.plates[j]?.platePrice
            }
            for(let j = 0; j<myOrd[i]?.myCart?.drinks?.length; j++){
                totalC += myOrd[i]?.myCart?.drinks[j]?.drinkPrice
            }
            for(let j = 0; j<myOrd[i]?.myCart?.extras?.length; j++){
                totalC += myOrd[i]?.myCart?.extras[j]?.extraPrice
            }
        }
        setTotal( totalC)
    }

    useEffect(() => {
        if(actual)
            getActualCheckouts()
    }, [actual])
    
    useEffect(()=>{calculateTotalPers()}, [orders])

    return (
    <Container>
      <Header navLeftType='back' />
      <Content contentContainerStyle={theme.layoutDf}>
                <BreadCrumb content={__('Comanda actuala')} desc={__('Adauga produse la comanda ta sau plateste direct de aici!')}/>
                {loading ? <ActivityIndicator color={COLOR.dark } /> : <View style={styles.bookingContainer}>
            <Collapse isExpanded={myOrderExpanded} onToggle={()=>setMyOrderExpanded(!myOrderExpanded) } style={{ elevation: 20, marginBottom: 20}}>
                <CollapseHeader>
                    <View style={styles.accordionHeader}>
                                <Text style={styles.accordionHeaderText}>COMANDA TA</Text>
                                <Icon name={myOrderExpanded ? 'chevron-up' : 'chevron-down'} size={ SIZE.large }/>
                    </View>
                </CollapseHeader>
                        <CollapseBody>
                        <View style={styles.accordionDetails}>
                                {orders.filter((el) => el?.userId === actual?.userId).map((item) => {
                                    return (
                                        <Fragment key={item?._id}>
                                            {item?.myCart?.plates?.map((plate, index) => {
                                                return (
                                                    <Fragment key={index.toString() + 'myordersplates'}>
                                                        <View style={styles.row}>
                                                            <View style={styles.NameColumnDt}>
                                                                <Text style={styles.DetailsItemHeader}>{plate?.plateName}</Text>
                                                            </View>
                                                            <View style={styles.QuantityColumnDt}>
                                                                <Text style={styles.DetailsItemHeader}>{plate?.plateQuantity}x</Text>
                                                            </View>
                                                            <View style={styles.PriceColumnDt}>
                                                                <Text style={styles.DetailsItemHeader}>{plate?.platePrice} RON</Text>
                                                            </View>
                                                        </View>
                                                        <Text style={styles.menuItenDesc}>{plate?.plateIngredients?.map((ingredient) => { return (ingredient) }).join(', ')}</Text>
                                                    </Fragment>
                                                )
                                            })}
                                            {item?.myCart?.drinks?.map((drink, index) => {
                                                return (
                                                    <View style={styles.row} key={index.toString() + 'myordersdrinks'}>
                                                        <View style={styles.NameColumnDt}>
                                                            <Text style={styles.DetailsItemHeader}>{drink?.drinkName}</Text>
                                                        </View>
                                                        <View style={styles.QuantityColumnDt}>
                                                            <Text style={styles.DetailsItemHeader}>{drink?.drinkQuantity}x</Text>
                                                        </View>
                                                        <View style={styles.PriceColumnDt}>
                                                            <Text style={styles.DetailsItemHeader}>{drink?.drinkPrice} RON</Text>
                                                        </View>
                                                    </View>
                                                )
                                            })}
                                            {item?.myCart?.extras?.map((extra, index) => {
                                                return (
                                                    <View style={styles.row} key={index.toString() + 'myordersextra'}>
                                                        <View style={styles.NameColumnDt}>
                                                            <Text style={styles.DetailsItemHeader}>{extra?.extraName}</Text>
                                                        </View>
                                                        <View style={styles.QuantityColumnDt}>
                                                            <Text style={styles.DetailsItemHeader}>{extra?.extraQuantity}x</Text>
                                                        </View>
                                                        <View style={styles.PriceColumnDt}>
                                                            <Text style={styles.DetailsItemHeader}>{extra?.extraPrice} RON</Text>
                                                        </View>
                                                    </View>
                                                )
                                            })}</Fragment>
                                    )
                                })}
                        <View style={styles.row}>
                            <TouchableOpacity onPress={()=>navigate('RestaurantScreen')} style={styles.buttonColumn}> 
                                <View style={styles.row}>
                                    <Icon name={'plus'} size={SIZE.tiny} color={COLOR.light}/>
                                    <Text style={styles.addProductsButtonText}>Adauga produse</Text>
                                </View>            
                            </TouchableOpacity>
                            <View style={styles.checkoutColumn}>
                                <Text style={styles.DetailsItemHeader}>Total </Text>
                            </View>
                            <View style={styles.PriceColumnDt }>
                                <Text style={styles.DetailsItemHeader}>{total.toString()} RON</Text>
                            </View>
                        </View>
                    </View>
                </CollapseBody>
            </Collapse>
            <Collapse isExpanded={theyOrderExpanded} onToggle={()=>setTheyOrderExpanded(!theyOrderExpanded) } style={{ elevation: 20}}>
                <CollapseHeader>
                    <View style={styles.accordionHeader}>                        
                        <Text style={styles.accordionHeaderText}>COMENZILE CELORLALTI</Text>
                        <Icon name={theyOrderExpanded ? 'chevron-up' : 'chevron-down'} size={ SIZE.large }/>
                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <View style={styles.accordionDetails}>
                                {orders?.filter((el) => el?.userId !== actual?.userId).length === 0 ? (
                                    <View style={styles.alignCenter}>
                                        <Text style={styles.titleText}>{'Nu mai exista nici o comanda.'}</Text>
                                    </View>
                                ) : (
                                    orders?.filter((el) => el?.userId !== actual?.userId).map((item) => {
                                        return (
                                            <Fragment key={item._id}>
                                                {item.myCart?.plates?.map((plate, index) => {
                                                    return (
                                                        <Fragment key={index.toString() + 'myordersplates'}>
                                                            <View style={styles.row}>
                                                                <View style={styles.NameColumnDt}>
                                                                    <Text style={styles.DetailsItemHeader}>{plate?.plateName}</Text>
                                                                </View>
                                                                <View style={styles.QuantityColumnDt}>
                                                                    <Text style={styles.DetailsItemHeader}>{plate?.plateQuantity}x</Text>
                                                                </View>
                                                                <View style={styles.PriceColumnDt}>
                                                                    <Text style={styles.DetailsItemHeader}>{plate?.platePrice} RON</Text>
                                                                </View>
                                                            </View>
                                                            <Text style={styles.menuItenDesc}>{plate?.plateIngredients?.map((ingredient) => { return (ingredient) }).join(', ')}</Text>
                                                        </Fragment>
                                                    )
                                                })}
                                                {item.myCart?.drinks?.map((drink, index) => {
                                                    return (
                                                        <View style={styles.row} key={index.toString() + 'myordersdrinks'}>
                                                            <View style={styles.NameColumnDt}>
                                                                <Text style={styles.DetailsItemHeader}>{drink?.drinkName}</Text>
                                                            </View>
                                                            <View style={styles.QuantityColumnDt}>
                                                                <Text style={styles.DetailsItemHeader}>{drink?.drinkQuantity}x</Text>
                                                            </View>
                                                            <View style={styles.PriceColumnDt}>
                                                                <Text style={styles.DetailsItemHeader}>{drink?.drinkPrice} RON</Text>
                                                            </View>
                                                        </View>
                                                    )
                                                })}
                                                {item.myCart?.extras?.map((extra, index) => {
                                                    return (
                                                        <View style={styles.row} key={index.toString() + 'myordersextra'}>
                                                            <View style={styles.NameColumnDt}>
                                                                <Text style={styles.DetailsItemHeader}>{extra?.extraName}</Text>
                                                            </View>
                                                            <View style={styles.QuantityColumnDt}>
                                                                <Text style={styles.DetailsItemHeader}>{extra?.extraQuantity}x</Text>
                                                            </View>
                                                            <View style={styles.PriceColumnDt}>
                                                                <Text style={styles.DetailsItemHeader}>{extra?.extraPrice} RON</Text>
                                                            </View>
                                                        </View>
                                                    )
                                                })}</Fragment>
                                        )
                                    }))}
                    </View>
                </CollapseBody>
            </Collapse>     
        </View>}

      </Content>
      <View style={styles.payBtn}>
        <Button
          content='PAY NOW'
          onPress={() => { navigate('CustomerPayment') }}
        />
      </View>
    </Container>
    )
}

export default ActualOrder;