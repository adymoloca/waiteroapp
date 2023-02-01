import React, {useState, useEffect, useLayoutEffect } from 'react';
import {
    StatusBar,
    TouchableHighlight,
    ImageBackground,
    TextInput,
    ActivityIndicator
} from 'react-native';
import { Container, View, Text, Content } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import theme from '@theme/styles';
import { SIZE, COLOR } from '../../../themes/typography';

import { navigate } from '@utility/navigation';
import { __ } from '@utility/translation';
import request from '@utility/request';

import Food from './Food';
import WaiterImage from '../../../../assets/images/serving-waiter.jpg';
import { useSelector } from 'react-redux';
import { data } from '../../../redux/baseUrl';
import axios from 'axios';

const PublicHome = ({ route, navigation }) => {
    
    const actualTable = useSelector(state => state.userReducer.actualTable);
    const [allRestaurants, setAllRestaurants] = useState([])
    const loadingFirstRequest = useSelector(state => state.userReducer.loading);
    const [searched, setSearched] = useState('')
    const [restaurantList, setRestaurantList] = useState([])
    const [loading, setLoading] = useState(false)

    const getRestaurants = () => {
        axios
        .get(`${data.baseUrl}/get-restaurants`)
        .then((response) => {
            const data = response.data?.restaurants;
            setAllRestaurants(data);
        })
        .catch((error) => {
            console.log(error);
            alert('Eroare - Ceva nu a functionat corect!');
        });
    }

    useEffect(() => {
        getRestaurants()
    }, [route, navigation])

    useEffect(() => {
        async function requestRestaurants() {
            setLoading(true);
            let listFiltered;
            if (actualTable?.tableNumber && actualTable?.restaurantId && actualTable?.clientId) {
                listFiltered = await allRestaurants?.filter((el) => el?.clientId === actualTable?.clientId);
            } else {
                listFiltered = await allRestaurants?.filter((el) => el?.restaurantName.toLowerCase().includes(searched.toLowerCase()) || el?.cuisines.join(', ').toLowerCase().includes(searched.toLowerCase()));
            }
            
            return listFiltered || [];
        }
        requestRestaurants().then((res) => setRestaurantList(res)).finally(() => setLoading(false))
    }, [searched, allRestaurants, actualTable]);

    // useEffect(() => {
    //     console.log("user---->", user);
    // }, [user])

    return (
        <Container>
            <TouchableHighlight
                style={styles.navLeftIcon}
                onPress={() => { navigation.openDrawer()}}
                underlayColor={'#fff'}
            >
                <Icon
                    name="list-ul"
                    size={SIZE.huge}
                    color={COLOR.light}
                />
            </TouchableHighlight>
            {!actualTable?.tableNumber ? (
                <TouchableHighlight
                    style={styles.navRightIcon}
                    onPress={() => navigation.navigate('ScanScreen')}
                    underlayColor={'#fff'}
                >
                    <Icon
                        name="qrcode"
                        style={[theme.huge, theme.light, theme.floating]}
                        raised={true}
                    />
                </TouchableHighlight>
            ) : (
                   <TouchableHighlight
                    style={styles.navRightIcon}
                    onPress={() => navigation.navigate('ActualOrder')}
                    underlayColor={'#fff'}
                >
                    <Icon
                        name="shopping-cart"
                        style={[theme.huge, theme.light, theme.floating]}
                        raised={true}
                    />
                </TouchableHighlight> 
            )
            }
            <ImageBackground
                source={WaiterImage}
                imageStyle="cover"
                style={styles.coverImg}
            >
            </ImageBackground>
            <Content contentContainerStyle={theme.layoutDouble}>
                <StatusBar backgroundColor="rgba(255, 90, 95, 1)" />
                <View style={styles.homeContainer}>
                    <View style={styles.homeInfo}>
                        <View style={styles.navBar}>
                            <Text style={styles.navDesc}>
                                {__('WAITERO')}
                            </Text>
                        </View>
                        <View style={styles.searchInputContainer}>
                            <Icon name='utensils' size={SIZE.huge} color={COLOR.red}/>
                            <TextInput placeholder='Cauta restaurante' style={styles.searchBtn} value={searched} onChangeText={(t)=>setSearched(t)}/>
                        </View>
                    </View>
                    <View style={styles.tableBg}>
                        {loading || loadingFirstRequest ? [1, 2, 3, 4, 5].map((index) => { return <ActivityIndicator key ={index} size={50} color={COLOR.greyLight} style={ { paddingVertical: 100 } } /> }) : (
                            <Food
                                list={restaurantList}
                                fetching={loading}
                            />
                        )}
                    </View>
                </View>
            </Content>
        </Container>
    );
}

export default PublicHome;