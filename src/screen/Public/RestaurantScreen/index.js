import React, { useState, useCallback, useRef, useEffect, Fragment } from 'react'
import { StatusBar, TouchableOpacity, Image, Text, ScrollView, TouchableHighlight, FlatList, TextInput, ActivityIndicator } from 'react-native'
import { Container, Content, Icon, View } from 'native-base'

import MapView from 'react-native-maps'
import Modal from 'react-native-modalbox'

import styles from './styles'
import theme from '@theme/styles'
import { COLOR, SIZE } from '../../../themes/typography'

import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

import Button from '@component/Button'
import Header from '@component/Header'

import { Rating } from 'react-native-ratings';
import CuttdPaper from '@asset/images/cutted-paper.png'

import { RESTAURANT } from './data';
import { useDispatch, useSelector } from 'react-redux'
import { createOrder, getRestaurant } from '../../../redux/actions/userActions.js'
import axios from 'axios'
import { data } from '../../../redux/baseUrl'

const RestaurantScreen = ({navigation, route}) => {

    const addItemModalRef = useRef();
    const cartModalRef = useRef();
    const modalGalleryRef = useRef();
    const modalReviewRef = useRef();

    const dispatch = useDispatch();

    const user = useSelector(state => state.userReducer.user);
    const token = useSelector(state => state.userReducer.token);
    const actual = useSelector(state => state.userReducer.actualRestaurant);
    const actualTable = useSelector(state => state.userReducer.actualTable);
    const loading = useSelector(state => state.userReducer.loading);

    const [tabSelected, setTabSelected] = useState(0);
    const [restaurantDescriptionShown, setRestaurantDescriptionShown] = useState(false);
    const [restaurantDescriptionMore, setRestaurantDescriptionMore] = useState(false);
    const [restaurantMenuSelected, setRestaurantMenuSelected] = useState(0);
    const [addItemModalStatus, setAddItemModalStatus] = useState(false);
    const [cartModalStatus, setCartModalStatus] = useState(false);
    const [itemSelectedIndex, setItemSelectedIndex] = useState([]);
    const [quantityToAdd, setQuantityToAdd] = useState(1);
    const [additionalSpecOnPlate, setAdditionalSpecOnPlate] = useState('');
    const [imageClicked, setImageClicked] = useState('');
    const [modalGalleryStatus, setModalGalleryStatus] = useState(false);
    const [modalReviewStatus, setModalReviewStatus] = useState(false);
    const [groupedByCategory, setGroupedByCategory] = useState({});
    const [buyButtonShow, setBuyButtonShow] = useState(cartCheckout?.tableNumber?.length > 0 && cartCheckout?.userId?.length > 0 && (cartCheckout?.drinks?.length > 0 || cartCheckout?.plates?.length > 0 || cartCheckout?.extras?.length > 0));
    const [drinkModal, setDrinkModal] = useState({});
    const [extraModal, setExtraModal] = useState({});
    const [plateModal, setPlateModal] = useState({});
    const [ratingFood, setRatingFood] = useState(0);
    const [ratingService, setRatingService] = useState(0);
    const [ratingAmbience, setRatingAmbience] = useState(0);
    const [ratingExperince, setRatingExperience] = useState(0);
    const [cartCheckout, setCartCheckout] = useState({
        clientId: "",
        restaurantId: "",
        tableNumber: "",
        userId: "",
        plates: [],
        drinks: [],
        extras: [],
        finalPrice: 0
    });

    const addToCheckout = () => {
        if (restaurantMenuSelected === -1) {
            setCartCheckout({
                ...cartCheckout,
                drinks: [...cartCheckout?.drinks, { drinkId: drinkModal?._id, drinkName: drinkModal?.drinkName, drinkPrice: drinkModal?.drinkPrice, drinkQuantity: quantityToAdd, suplimentaryDescription: additionalSpecOnPlate, totalPrice: drinkModal?.drinkPrice * quantityToAdd, isPaid: false }],
                finalPrice: cartCheckout.finalPrice + drinkModal?.drinkPrice * quantityToAdd
            })
        }
        if (restaurantMenuSelected === -2) {
            setCartCheckout({
                ...cartCheckout,
                extras: [...cartCheckout?.extras, { extraId: extraModal?._id, extraName: extraModal?.extraName, extraPrice: extraModal?.extraPrice, extraQuantity: quantityToAdd, suplimentaryDescription: additionalSpecOnPlate, totalPrice: extraModal?.extraPrice * quantityToAdd, isPaid: false }],
                finalPrice: cartCheckout.finalPrice + extraModal?.extraPrice * quantityToAdd
            })
        }
        if (restaurantMenuSelected !== -1 && restaurantMenuSelected !== -2) {
            setCartCheckout({
                ...cartCheckout,
                plates: [...cartCheckout?.plates, { plateId: plateModal?._id, plateName: plateModal?.plateName, plateIngredients: plateModal?.plateIngredients, platePrice: plateModal?.platePrice, plateQuantity: quantityToAdd, suplimentaryDescription: additionalSpecOnPlate, totalPrice: plateModal?.platePrice * quantityToAdd, isPaid: false }],
                finalPrice: cartCheckout.finalPrice + plateModal?.platePrice * quantityToAdd
            })
        }
        addItemModalRef.current.close();
    }

    const onRestaurantDescriptionLayout = useCallback((event) => {
        setRestaurantDescriptionMore(event.nativeEvent.lines.length >= 2)
    }, [])

    const cleanAddItemModal = () => {
        setItemSelectedIndex([])
        setAdditionalSpecOnPlate('')
        setQuantityToAdd(1)
    }

    const cancelAddItem = () => {
        addItemModalRef.current.close()
    }

    function groupBy(arr, property) {
        return arr?.reduce(function (memo, x) {
          if (!memo[x[property]]) { memo[x[property]] = []; }
          memo[x[property]].push(x);
          return memo;
        }, {}) || [];
    }
    
    useEffect(() => {
        async function createGroupedDrinks() {
            const o = await groupBy(actual?.drinks, 'drinkCategory')
            return o
        }
        createGroupedDrinks().then((grouped) => setGroupedByCategory(grouped))
    }, [actual])


    useEffect(() => {
        itemSelectedIndex.length === 2 ? setAddItemModalStatus(true) : setAddItemModalStatus(false)
    }, [itemSelectedIndex])
    useEffect(() => {
        imageClicked.length === 0 ? setModalGalleryStatus(false) : setModalGalleryStatus(true)
    }, [imageClicked])

    useEffect(() => {
        (function () {
            const resIdFromPubliScreen = route?.params?.restaurant?.item?._id ? route.params.restaurant.item._id : null;
            const userId = user?._id ? user._id : null;
            actualTable?.restaurantId ? (setCartCheckout({ ...cartCheckout, restaurantId: actualTable?.restaurantId, clientId: actualTable?.clientId, tableNumber: actualTable?.tableNumber, userId: userId })) : (setCartCheckout({ ...cartCheckout, restaurantId: resIdFromPubliScreen, userId: userId}))
        })();
    },[route, user, actualTable])

    useEffect(() => {
        if (actualTable?.restaurantId ) {
            dispatch(getRestaurant(actualTable.restaurantId));
        } else if (route?.params?.restaurant?.item?._id) {
            dispatch(getRestaurant(route.params.restaurant.item._id));
        }
    }, [actualTable, route])

    const totalPriceForCheckout = () => {
        let total = 0;
        cartCheckout.drinks?.length > 0 && cartCheckout.drinks?.map(item => {
            total = total + item.totalPrice;
        });
        cartCheckout.plates?.length > 0 && cartCheckout.plates.map(item => {
            total = total + item.totalPrice;
        });
        cartCheckout.extras?.length > 0 && cartCheckout.extras.map(item => {
            total = total + item.totalPrice;
        });
        
        return total;
    }

    const removePlate = (index) => {
        if (index !== -1) {
            setCartCheckout((checkout) => ({ ...checkout, plates: checkout.plates.filter((el, i) => i !== index) }));
        }
        if (cartCheckout.plates?.length < 1 && cartCheckout.drinks?.length < 1 && cartCheckout.extras?.length < 1) {
            cleanAddItemModal();
            setCartModalStatus(false);
        }
    }

    const removeDrink = (index) => {
        if (index !== -1) {
            setCartCheckout((checkout) => ({ ...checkout, drinks: checkout.drinks.filter((el, i) => i !== index) }));
        }
        if (cartCheckout.plates?.length < 1 && cartCheckout.drinks?.length < 1 && cartCheckout.extras?.length < 1) {
            cleanAddItemModal();
            setCartModalStatus(false);
        }
    }

    const removeExtra = (index) => {
        if (index !== -1) {
            setCartCheckout((checkout) => ({ ...checkout, extras: checkout.extras.filter((el, i) => i !== index) }));
        }
        if (cartCheckout.plates?.length < 1 && cartCheckout.drinks?.length < 1 && cartCheckout.extras?.length < 1) {
            cleanAddItemModal();
            setCartModalStatus(false);
        }
    }

    const leaveReview = () => {
        axios.post(`${data.baseUrl}/${cartCheckout.userId}/restaurant/${cartCheckout.restaurantId}/add-review`, {
            food: ratingFood,
            service: ratingService,
            ambience: ratingAmbience,
            experience: ratingExperince
        }, {
            headers: {
              Authorization: `Bearer ${token}`
            }
        })
            .then((result) => {
                const data = result.data;
                console.log(data);
                alert('Multumim pentru review!');
            })
            .catch((err) => {
                console.log(err);
                alert('Eroare - ceva nu a functionat corect!');
        })
    }

    const getTabSelected = (selected) => {
        switch (selected) {
            case 0: {
                return (
                    <View style={styles.marginBottomOnMenu}>
                        <View style={styles.overViewInfo}>
                            <Text onTextLayout={onRestaurantDescriptionLayout} numberOfLines={restaurantDescriptionShown ? undefined : 2} style={styles.overViewDesc}>{actual?.description}</Text>
                            {restaurantDescriptionMore ? (
                                <TouchableOpacity onPress={() => setRestaurantDescriptionShown(!restaurantDescriptionShown)}>
                                    <Text style={styles.readText}>{restaurantDescriptionShown ? 'Read less' : 'Read more'}</Text>
                                </TouchableOpacity>) : null}
                            {!(actualTable?.restaurantId && actualTable?.tableNumber) && (
                                <Button
                                    content='SCAN NOW'
                                    onPress={() => { navigate('ScanScreen') }}
                                />
                            )
                            }
                        </View>
                        <View style={styles.tableBookingLayout}>
                            <View style={[styles.tableBookingInfo, styles.tableBookingBgInfo]}>
                                <Image source={require('@asset/images/restaurant.png')} style={styles.tableBookingImg} />
                                <View>
                                    <Text style={styles.tableBookingTitle}>BUCATARIE</Text>
                                    <Text style={styles.tableBookingText}>{actual?.cuisines?.join(', ')}</Text>
                                </View>
                            </View>
                            <View style={[styles.tableBookingInfo, styles.tableBookingBgInfo]}>
                                <Image source={require('@asset/images/pie.png')} style={styles.tableBookingImg} />
                                <View>
                                    <Text style={styles.tableBookingTitle}>STIL RESTAURANT</Text>
                                    <Text style={styles.tableBookingText}>{RESTAURANT.diningStyles.join(', ')}</Text>
                                </View>
                            </View>
                            <View style={[styles.tableBookingInfo, styles.tableBookingBgInfo]}>
                                <Image source={require('@asset/images/credit-cards.png')} style={styles.tableBookingImg} />
                                <View>
                                    <Text style={styles.tableBookingTitle}>OPTIUNI PLATA</Text>
                                    <Text style={styles.tableBookingText}>{actual?.paymentOptions?.join(', ')}</Text>
                                </View>
                            </View>
                            <View style={[styles.tableBookingInfo, styles.tableBookingBgInfo]}>
                                <Image source={require('@asset/images/dj.png')} style={styles.tableBookingImg} />
                                <View>
                                    <Text style={styles.tableBookingTitle}>INTRETINERE</Text>
                                    <Text style={styles.tableBookingText}>{actual?.entertainment?.join(', ')}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            }
            case 1: {
                return (
                    <View style={styles.marginBottomOnMenu}>
                        <Text style={styles.menuLable}>{__('Menu')}</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.menuTabs}>
                                {actual?.restaurantMenu?.map((type, index) => {
                                    return (
                                        <TouchableOpacity key={index.toString() + 'restaurantmenus'} onPress={() => setRestaurantMenuSelected(index)}>
                                            <Text style={restaurantMenuSelected === index ? styles.menuActiveText : styles.menuInactiveText}>{type?.menuName}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                                <TouchableOpacity key={'drinks-restaurantmenus'} onPress={() => setRestaurantMenuSelected(-1)}>
                                    <Text style={restaurantMenuSelected === -1 ? styles.menuActiveText : styles.menuInactiveText}>{"Drinks"}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity key={'extras-restaurantmenus'} onPress={() => setRestaurantMenuSelected(-2)}>
                                    <Text style={restaurantMenuSelected === -2 ? styles.menuActiveText : styles.menuInactiveText}>{"Extras"}</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                        <View>
                            {restaurantMenuSelected !== -1 && restaurantMenuSelected!== -2 && actual?.restaurantMenu[restaurantMenuSelected]?.menuCategories?.map((section, firstIndex) => {
                                return (
                                    <View style={styles.menuLayout} key={firstIndex.toString() + 'restaurantmenussection'}>
                                        <Text style={styles.menuName}>{section?.categoryName}</Text>
                                        {section?.plates?.map((plate, secondIndex) => {
                                            return (
                                                <View style={styles.menuDetail} key={secondIndex.toString() + 'restaurantmenusspl'}>
                                                    <View style={styles.menuInfo}>
                                                        <Text style={styles.menuTitle}>{plate?.plateName}</Text>
                                                        <Text style={styles.menuPrice}>RON {plate?.platePrice}</Text>
                                                    </View>
                                                    <Text style={styles.menuItenDesc}>{plate?.plateIngredients?.map((ingredient) => { return (ingredient) }).join(', ')}</Text>
                                                    {cartCheckout?.tableNumber?.length > 0 && cartCheckout?.userId?.length > 0 ? (
                                                        <TouchableOpacity
                                                            style={styles.addProductBtn}
                                                            onPress={() => { setItemSelectedIndex([firstIndex, secondIndex]); setBuyButtonShow(false); setPlateModal(plate); }}
                                                        >
                                                            <Icon
                                                                name="plus-circle"
                                                                type='FontAwesome5'
                                                                style={[theme.higantic, theme.red, theme.floating]}
                                                                raised={true}
                                                            />
                                                        </TouchableOpacity>
                                                    ) : null} 
                                                </View>
                                            )
                                        })}
                                    </View>
                                )
                            })}
                            {restaurantMenuSelected === -1 && Object.keys(groupedByCategory)?.map((key)=> {
                                return (
                                    <View style={styles.menuLayout} key={key + 'restaurantdrinks'}>
                                        <Text style={styles.menuName}>{key}</Text>
                                        {groupedByCategory[key]?.map((drink, index) => {
                                            return (
                                                <View style={styles.menuDetail} key={`${index.toString()}restaurantdrinkscsm`}>
                                                    <View style={styles.menuInfo}>
                                                        <Text style={styles.menuTitle}>{drink?.drinkName}</Text>
                                                        <Text style={styles.menuPrice}>RON {drink?.drinkPrice}</Text>
                                                    </View>
                                                    {cartCheckout?.tableNumber?.length > 0 && cartCheckout?.userId?.length > 0 ? (
                                                        <TouchableOpacity
                                                            style={styles.addProductBtn}
                                                            onPress={() => { setItemSelectedIndex([key, index]); setBuyButtonShow(false); setDrinkModal(drink) }}
                                                        >
                                                            <Icon
                                                                name="plus-circle"
                                                                type='FontAwesome5'
                                                                style={[theme.higantic, theme.red, theme.floating]}
                                                                raised={true}
                                                            />
                                                        </TouchableOpacity>
                                                    ) : null}
                                                </View>
                                            )
                                        })}
                                    </View>
                                )
                            })}
                            {restaurantMenuSelected === -2 && (<View style={styles.menuLayout} key={'extras - restaurantextras'}>
                                        <Text style={styles.menuName}>{"Optiuni suplimentare"}</Text>
                                        {actual?.extras?.map((extra, index) => {
                                            return (
                                                <View style={styles.menuDetail} key={`${index.toString()}restaurantextrasscsm`}>
                                                    <View style={styles.menuInfo}>
                                                        <Text style={styles.menuTitle}>{extra?.extraName}</Text>
                                                        <Text style={styles.menuPrice}>RON {extra?.extraPrice}</Text>
                                                    </View>
                                                    {cartCheckout?.tableNumber?.length > 0 && cartCheckout?.userId?.length > 0 ? (
                                                        <TouchableOpacity
                                                            style={styles.addProductBtn}
                                                            onPress={() => { setItemSelectedIndex([0, index]); setBuyButtonShow(false); setExtraModal(extra) }}
                                                        >
                                                            <Icon
                                                                name="plus-circle"
                                                                type='FontAwesome5'
                                                                style={[theme.higantic, theme.red, theme.floating]}
                                                                raised={true}
                                                            />
                                                        </TouchableOpacity>
                                                    ) : null}
                                                </View>
                                            )
                                        })}
                                    </View>
                                )
                            }
                        </View>
                    </View>
                )
            }
            // case 3: {
            //     return (
            //         <View>
            //             <Text style={styles.photoTitle}>{__('PHOTOS')}</Text>
            //             <View>
            //                 <View style={{ paddingLeft: 15 }}>
            //                     {RESTAURANT.photos.map((links, index) => {
            //                         return (
            //                             <View style={styles.categoryImgDetail} key={index.toString() + 'restaurantImages'}>
            //                                 <View style={{ flex: 1 }}>
            //                                     <View style={styles.categoryRightDetails}>
            //                                         <TouchableOpacity style={styles.categoryRightImgDisplay} onPress={() => setImageClicked(links[0])}>
            //                                             <Image source={{ uri: links[0] }} style={styles.categoryRightTopImg} />
            //                                             <View style={styles.categoryRightImgLayout} />
            //                                         </TouchableOpacity>
            //                                     </View>
            //                                     <View style={styles.categoryRightDetails}>
            //                                         <TouchableOpacity style={styles.categoryRightImgDisplay} onPress={() => setImageClicked(links[1])}>
            //                                             <Image source={{ uri: links[1] }} style={styles.categoryRightImg} />
            //                                             <View style={styles.categoryRightImgLayout} />
            //                                         </TouchableOpacity>
            //                                     </View>
            //                                 </View>
            //                                 <View style={{ flex: 1 }}>
            //                                     <View style={styles.categoryLeftDetails}>
            //                                         <TouchableOpacity onPress={() => setImageClicked(links[2])}>
            //                                             <Image source={{ uri: links[2] }} style={styles.categoryLeftImg} />
            //                                             <View style={styles.categoryLeftImgLayout} />
            //                                         </TouchableOpacity>
            //                                     </View>
            //                                 </View>
            //                             </View>
            //                         )
            //                     })}
            //                 </View>
            //             </View>
            //         </View>
            //     )
            // }
            case 4: {
                return (
                    <View style={styles.marginBottomOnMenu}>
                        <Text style={styles.locationTitle}>{'LOCATIE'}</Text>

                        <View style={styles.mMap}>
                            <MapView
                                style={styles.mMapImg}
                            /* region={RESTAURANT.location} */
                            />
                        </View>
                        <View style={styles.tableBookingLayout}>
                            <View style={styles.tableBookingInfo}>
                                <Icon name='phone-in-talk' type='MaterialIcons' style={[theme.extraLarge, theme.darkLight]} />
                                <View>
                                    <Text style={styles.tableBookingTitle}>{__('NUMAR TELEFON')}</Text>
                                    <Text style={styles.tableBookingText}>{actual?.contact?.phoneNumber}</Text>
                                </View>
                            </View>
                            <View style={[styles.tableBookingInfo, styles.tableBookingBgInfo]}>
                                <Icon name='earth' type='AntDesign' style={[theme.extraLarge, theme.darkLight]} />
                                <View>
                                    <Text style={styles.tableBookingTitle}>{__('WEBSITE')}</Text>
                                    <Text style={styles.websiteText}>{actual?.contact?.website}</Text>
                                </View>
                            </View>
                            <View style={styles.tableBookingInfo}>
                                <Icon name='clock' type='Feather' style={[theme.extraLarge, theme.darkLight]} />
                                <View>
                                    <Text style={styles.tableBookingTitle}>{__('PROGRAM')}</Text>
                                    <Text style={styles.tableBookingText}>{__(`Monday - Friday ${actual?.contact?.orar?.mondayToFriday?.openAt} - ${actual?.contact?.orar?.mondayToFriday?.closeAt}`)}</Text>
                                    <Text style={styles.tableBookingText}>{__(`Saturday ${actual?.contact?.orar?.saturday?.openAt} - ${actual?.contact?.orar?.saturday?.closeAt}`)}</Text>
                                    <Text style={styles.tableBookingText}>{__(`Sunday ${actual?.contact?.orar?.sunday?.openAt} - ${actual?.contact?.orar?.sunday?.closeAt}`)}</Text>
                                </View>
                            </View>
                            <View style={[styles.tableBookingInfo, styles.tableBookingBgInfo]}>
                                <Image source={require('@asset/images/credit-cards.png')} style={styles.tableBookingImg} />
                                <View>
                                    <Text style={styles.tableBookingTitle}>{__('URMARESTENE PE')}</Text>
                                    <View style={styles.socialMediaIconDetail}>
                                        <Icon name="facebook-square" type='AntDesign' style={styles.socialMediaIcon} />
                                        <Icon name="instagram" type='FontAwesome5' style={styles.socialMediaIcon} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            }
            case 5: {
                return (
                    <View>
                        <View style={styles.offerInfo}>
                            <Text style={styles.offerTitle}>{__('PARERI')}</Text>
                            <Text style={styles.reviewYearDesc}>{__('Trebuie sa ai minim o comanda in acest restaurant pentru a putea lasa un review!')}</Text>
                            <View style={styles.reviewList}>
                                <View style={styles.reviewListInfo}>
                                    <Text style={styles.reviewListNum}>{actual?.rating[0]?.food}</Text>
                                    <Text style={styles.reviewListText}>{__('Food')}</Text>
                                </View>
                                <View style={styles.reviewListInfo}>
                                    <Text style={styles.reviewListNum}>{actual?.rating[0]?.service}</Text>
                                    <Text style={styles.reviewListText}>{__('Service')}</Text>
                                </View>
                                <View style={styles.reviewListInfo}>
                                    <Text style={styles.reviewListNum}>{actual?.rating[0]?.ambience}</Text>
                                    <Text style={styles.reviewListText}>{__('Ambience')}</Text>
                                </View>
                                <View style={styles.reviewListInfo}>
                                    <Text style={styles.reviewListNum}>{actual?.rating[0]?.experience }</Text>
                                    <Text style={styles.reviewListText}>{__('Experience')}</Text>
                                </View>
                            </View>
                            <View style={styles.radioDetail}>
                                <Button
                                    content='WRITE A REVIEW'
                                    onPress={() => { user.loggedIn === true && token?.length > 0 ? setModalReviewStatus(true) : alert('You need to be logged in') }}
                                />
                            </View>
                        </View>
                    </View>
                )
            }
        }
    }

    return (
        <Container>
            <Header navLeftType='back' />
            <Content contentContainerStyle={theme.layoutDf}>
                {loading ? <View style={styles.restaurantContainer}><ActivityIndicator size={50} color={COLOR.light} style={{ paddingVertical: 100 }} /></View> : <>
                    <View>
                        <View style={styles.restaurantContainer}>
                            <View >
                                <Text style={styles.breadCrumbTitle}>{actual?.restaurantName}</Text>
                                <View style={styles.starIconDetail}>
                                    <Rating type='custom' startingValue={actual?.rating?.length} readonly={true} ratingColor='#fff' ratingBackgroundColor={COLOR.red} tintColor={COLOR.red} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.bgImgDetail}>
                            <View style={styles.bgImg}>
                                <Image source={{ uri: actual?.coverPicture }} style={styles.detailImg} />
                                {!(actualTable?.restaurantId && actualTable?.tableNumber) && (
                                    <TouchableOpacity style={styles.bookTextDetail} onPress={() => { navigate('ScanScreen') }}>
                                        <Image source={require('@asset/images/booknow-bg.png')} />
                                        <Text style={styles.bookText}>{__('SCAN NOW')}</Text>
                                    </TouchableOpacity>)}
                            </View>
                        </View>
                    </View>
                    <View style={styles.reviewInfo}>
                        <View style={styles.reviewDetail}>
                            <Icon name='chat' type='Entypo' style={[theme.extraLarge, theme.darkLight]} />
                            <Text style={styles.reviewText}>{actual?.rating?.length || 0} reviews</Text>
                        </View>
                        <View style={styles.reviewDetail}>
                            <Icon name='money' type='FontAwesome' style={[theme.extraLarge, theme.darkLight]} />
                            <Text style={styles.reviewText}>RON {RESTAURANT.cheapestPlate} minim</Text>
                        </View>
                        <View style={styles.reviewDetail}>
                            <Icon name='local-restaurant' type='MaterialIcons' style={[theme.extraLarge, theme.darkLight]} />
                            <Text style={styles.reviewText}>{actual?.cuisines?.length === 0 ? "" : actual?.cuisines?.join(', ')?.slice(0, 11)}...</Text>
                        </View>
                    </View>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.tabs}>
                                <TouchableOpacity style={styles.tabBtn} onPress={() => setTabSelected(0)}>
                                    <Text style={tabSelected === 0 ? styles.activeText : styles.inactiveText}>{__('OVERVIEW')}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.tabBtn} onPress={() => setTabSelected(1)}>
                                    <Text style={tabSelected === 1 ? styles.activeText : styles.inactiveText}>{__('MENU')}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.tabBtn} onPress={() => setTabSelected(4)}>
                                    <Text style={tabSelected === 4 ? styles.activeText : styles.inactiveText}>{__('LOCATION')}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.tabBtn} onPress={() => setTabSelected(5)}>
                                    <Text style={tabSelected === 5 ? styles.activeText : styles.inactiveText}>{__('REVIEWS')}</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                        <View>
                            {getTabSelected(tabSelected)}
                        </View>
                    </View>
                </>}
            </Content>
            {buyButtonShow && !cartModalStatus && tabSelected !== 4 && tabSelected !== 5 ? (
                <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() => { setCartModalStatus(true) && setBuyButtonShow(false)}}
                >
                    <Fragment>
                        <Text style={styles.cartBtnText}>RON {totalPriceForCheckout()} - IN CURS </Text>
                        <Icon
                            name="arrow-up"
                            type='FontAwesome5'
                            style={[theme.large, theme.light, theme.floating]}
                        />
                    </Fragment>
                </TouchableOpacity>) : null}
            <Modal
                ref={addItemModalRef}
                isOpen={addItemModalStatus}
                onClosed={() => cleanAddItemModal()}
                position={'bottom'}
                swipeToClose={false}
                style={styles.mBox}>
                <Image source={CuttdPaper} style={styles.modalPaper} resizeMode={'stretch'} />
                <TouchableOpacity style={styles.closeHiddenDesc} onPress={() => addItemModalRef.current.close()}>
                    <Icon name='close' type='AntDesign' style={[theme.compact, theme.grey]} />
                </TouchableOpacity>
                <View>
                    <View style={styles.modalInfo}>
                        {restaurantMenuSelected === -1 ? (
                            <>
                                <Text style={styles.modalReviewText}>{drinkModal?.drinkName}</Text>
                                <Text style={styles.reviewLabel}>{drinkModal?.drinkCategory}</Text>
                                <Text style={styles.modalPriceText}>RON {drinkModal?.drinkPrice}</Text>
                            </>
                        ) : null}
                        {restaurantMenuSelected === -2 ? (
                            <>
                                <Text style={styles.modalReviewText}>{extraModal?.extraName}</Text>
                                <Text style={styles.modalPriceText}>RON {extraModal?.extraPrice}</Text>
                            </>
                        ) : null}
                        {restaurantMenuSelected !== -1 && restaurantMenuSelected !== -2 ? (
                            <>
                                <Text style={styles.modalReviewText}>{plateModal?.plateName}</Text>
                                <Text style={styles.reviewLabel}>{plateModal?.plateIngredients?.map((ingredient) => { return (ingredient) }).join(', ')}</Text>
                                <Text style={styles.modalPriceText}>RON {plateModal?.platePrice}</Text> 
                            </>
                        ): null}
                        
                        <View style={styles.modalReviewDetail}>
                            <Text style={styles.inputLabel}>{__('Cantitate:')}</Text>
                            <View style={styles.quantityControlView}>
                                <TouchableOpacity style={styles.quantityControlBtn} onPress={() => setQuantityToAdd(quantityToAdd - 1)} disabled={quantityToAdd === 1}>
                                    <Icon name='caret-square-down' type={'FontAwesome5'} style={{ fontSize: 18, color: quantityToAdd === 1 ? COLOR.greyLight : COLOR.dark }} solid />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 22, marginHorizontal: 10 }}>{quantityToAdd}</Text>
                                <TouchableOpacity style={styles.quantityControlBtn} onPress={() => setQuantityToAdd(quantityToAdd + 1)}>
                                    <Icon name='caret-square-up' type={'FontAwesome5'} style={{ fontSize: 18, color: COLOR.dark }} solid />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.inputLabel}>{__('Specificatii suplimentare:')}</Text>
                            <View style={styles.inputDetail}>
                                <TextInput
                                    placeholder={restaurantMenuSelected === -1 ? 'ex: Rece de la frigider sau la temperatura camerei' : restaurantMenuSelected === -2 ? 'ex: Paine de casa sau ardei foarte iuti' : 'ex: Fara sos de maioneza'}
                                    value={additionalSpecOnPlate}
                                    onChangeText={(newT) => setAdditionalSpecOnPlate(newT)}
                                    placeholderTextColor={COLOR.greyLight}
                                    multiline
                                    numberOfLines={3}
                                    textAlignVertical={'top'}
                                    style={styles.inputText} />
                            </View>
                            <View style={{ height: 110, justifyContent: 'space-between' }}>
                                <Button
                                    onPress={() => { addToCheckout(); setBuyButtonShow(true); }}
                                    content='ADAUGATI LA COMANDA'
                                    type='default'
                                    icon={{ name: 'add-to-list', type: 'Entypo', size: 10 }}
                                />
                                <Button
                                    onPress={() => cancelAddItem()}
                                    content='STERGETI'
                                    type='secondary'
                                    icon={{ name: 'trash', type: 'FontAwesome5', size: 10 }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                ref={cartModalRef}
                isOpen={cartModalStatus}
                onClosed={() => setCartModalStatus(false)}
                position={'bottom'}
                onRequestClose={true}
                swipeToClose={false}
                style={styles.mBox}>
                <Image source={CuttdPaper} style={styles.modalPaper} resizeMode={'stretch'} />
                <TouchableOpacity style={styles.closeHiddenDesc} onPress={() => cartModalRef.current.close()}>
                    <Icon name='close' type='AntDesign' style={[theme.compact, theme.grey]} />
                </TouchableOpacity>
                <View>
                    <View style={styles.modalInfo}>
                        <Text style={styles.modalReviewText}>{'COMANDA IN CURS'}</Text>
                        {cartCheckout?.plates?.map((plate, index) => {
                            return (
                                <View style={styles.plateContainer} key={index.toString() + 'platemodalind'}>
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
                                        <View style={styles.deleteColumn}>
                                            <TouchableOpacity onPress={() => {removePlate(index)}}>
                                                <Icon name='delete' type='AntDesign' style={{ fontSize: SIZE.large, color: COLOR.red }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    {plate?.plateIngredients?.map((item, index) => {
                                        return (
                                            <View style={styles.extraPlateContainer} key={index.toString() + 'plateingredientsmodalind'}>
                                                <View style={[styles.row, { width: '78%' }]}>
                                                    <Text style={styles.extraText}>{item}</Text>
                                                </View>
                                            </View>
                                        )
                                    })}
                                </View>
                            )
                        })}
                        {cartCheckout?.drinks?.map((drink, index) => {
                            return (
                                <View style={[styles.row, { paddingBottom: 10 }]} key={index.toString() + 'drinkmodalind'}>
                                    <View style={styles.NameColumnDt}>
                                        <Text style={styles.DetailsItemHeader}>{drink?.drinkName}</Text>
                                    </View>
                                    <View style={styles.QuantityColumnDt}>
                                        <Text style={styles.DetailsItemHeader}>{drink?.drinkQuantity}x</Text>
                                    </View>
                                    <View style={styles.PriceColumnDt}>
                                        <Text style={styles.DetailsItemHeader}>{drink?.drinkPrice} RON</Text>
                                    </View>
                                    <View style={styles.deleteColumn}>
                                        <TouchableOpacity onPress={() => removeDrink(index)}>
                                            <Icon name='delete' type='AntDesign' style={{ fontSize: SIZE.large, color: COLOR.red }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })}
                        {cartCheckout?.extras?.map((extra, index) => {
                            return (
                                <View style={styles.row} key={index.toString() + 'extrasmodalind'}>
                                    <View style={styles.NameColumnDt}>
                                        <Text style={styles.DetailsItemHeader}>{extra?.extraName}</Text>
                                    </View>
                                    <View style={styles.QuantityColumnDt}>
                                        
                                        <Text style={styles.DetailsItemHeader}>{extra?.extraQuantity}x</Text>
                                    </View>
                                    <View style={styles.PriceColumnDt}>
                                        <Text style={styles.DetailsItemHeader}>{extra?.extraPrice} RON</Text>
                                    </View>
                                    <View style={styles.deleteColumn}>
                                        <TouchableOpacity onPress={() => {removeExtra(index)}}>
                                            <Icon name='delete' type='AntDesign' style={{ fontSize: SIZE.large, color: COLOR.red }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })}
                        <View style={{ height: 60, justifyContent: 'center', alignItems: 'flex-end', marginTop: 20 }}>
                            <Text style={[styles.modalReviewText, { fontFamily: theme.normal }]}>{'TOTAL DE PLATA: '}RON {totalPriceForCheckout()}</Text>
                        </View>
                        <View style={{ height: 55, justifyContent: 'space-between', marginTop: 20 }}>
                            <Button
                                onPress={() => { dispatch(createOrder(user._id, token, cartCheckout.clientId, cartCheckout.restaurantId, cartCheckout.tableNumber, cartCheckout)); navigation.navigate('ActualOrder', {cart: cartCheckout}) }}
                                content='TRIMITETI COMANDA'
                                type='default'
                                icon={{ name: 'paper-plane', type: 'Entypo', size: 10 }}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                ref={modalGalleryRef}
                isOpen={modalGalleryStatus}
                onClosed={() => setImageClicked('')}
                position={'center'}
                swipeToClose={false}
                style={styles.mNewBox}>
                <View>
                    <TouchableOpacity style={styles.modalClose} onPress={() => modalGalleryRef.current.close()}>
                        <Icon name='close' type='AntDesign' style={[theme.compact, theme.grey]} />
                    </TouchableOpacity>
                    <View style={styles.imgInfo}>
                        <Image source={{ uri: imageClicked }} style={{ flex: 1 }} />
                    </View>
                </View>
            </Modal>
            <Modal
                ref={modalReviewRef}
                isOpen={modalReviewStatus && user.loggedIn === true && token?.length > 0 }
                position={'bottom'}
                onClosed={() => setModalReviewStatus(false) }
                swipeToClose={false}
                style={styles.mBox}>
                <TouchableOpacity style={styles.closeHiddenDesc} onPress={() => modalReviewRef.current.close()}>
                    <Icon name='close' type='AntDesign' style={[theme.compact, theme.grey]} />
                </TouchableOpacity>
                <View>
                    <View style={styles.modalInfo}>
                        <Text style={styles.modalReviewText}>{__('WRITE REVIEW')}</Text>
                        <Text style={styles.reviewLabel}>{__('Kindly write the feedback about Restaurant')}</Text>
                        <View style={styles.listDetail}>
                            <Text style={styles.ratingTitle}>{__('FOOD')}</Text>
                            <View style={styles.iconItem}>
                                <Rating type={'custom'} imageSize={30} fractions={2} ratingBackgroundColor={COLOR.red} ratingColor={COLOR.light} tintColor={COLOR.red} onFinishRating={(value) => {setRatingFood(value); console.log(value)} } />
                            </View>
                        </View>
                        <View style={styles.revDetail}>
                            <Text style={styles.ratingTitle}>{__('SERVICE')}</Text>
                            <View style={styles.iconItem}>
                            <Rating type={'custom'} imageSize={30} fractions={2} ratingBackgroundColor={COLOR.red} ratingColor={COLOR.light} tintColor={COLOR.red} onFinishRating={(value) => {setRatingService(value); console.log(value)} }/>
                            </View>
                        </View>
                        <View style={styles.listDetail}>
                            <Text style={styles.ratingTitle}>{__('AMBIENCE')}</Text>
                            <View style={styles.iconItem}>
                            <Rating type={'custom'} imageSize={30} fractions={2} ratingBackgroundColor={COLOR.red} ratingColor={COLOR.light} tintColor={COLOR.red} onFinishRating={(value) => {setRatingAmbience(value); console.log(value)} }/>
                            </View>
                        </View>
                        <View style={styles.revDetail}>
                            <Text style={styles.ratingTitle}>{__('EXPERIENCE')}</Text>
                            <View style={styles.iconItem}>
                                 <Rating type={'custom'} imageSize={30} fractions={2} ratingBackgroundColor={COLOR.red} ratingColor={COLOR.light} tintColor={COLOR.red} onFinishRating={(value) => {setRatingExperience(value); console.log(value)} }/>
                            </View>
                        </View>
                        <View style={{marginTop: 25}}>
                            <Button type={'primary'} content={'TRIMITE'} onPress={() => { leaveReview(); setModalReviewStatus(false) }} disabled={user.loggedIn === true && token.length > 0}></Button>
                        </View>
                    </View>
                </View>
            </Modal>
        </Container>
    );
}

export default RestaurantScreen;