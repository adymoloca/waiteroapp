import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
  restaurantContainer: {
    backgroundColor: COLOR.red,
    paddingHorizontal: 20,
    paddingTop: 15,
    height: 230
  },
  alignRight: {
    display: 'flex',
    alignItems: 'flex-end'
  },
  breadCrumbTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.huge,
    color:COLOR.light,
    marginBottom: 5
  },
  starIconDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bgImgDetail: {
    position: 'absolute',
    width: '100%',
    bottom: -80,
    paddingHorizontal: 20
  },
  bgImg: {
    width: '100%',
    height: 200
  },
  detailImg: {
    flex: 1
  },
  bookTextDetail: {
    position: 'absolute',
    top: 12,
    right: -6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bookText: {
    position: 'absolute',
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color:COLOR.light,
  },
  reviewInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 10,
    justifyContent: 'center'
  },
  reviewDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10
  },
  reviewText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.darkLight,
    paddingLeft: 10
  },
  /** * -- Tab -- ***/
  tabs: {
    flexDirection: 'row',
    marginTop: 30,
    marginHorizontal: 20
  },
  activeText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color:COLOR.light,
    paddingVertical: 10,
    paddingHorizontal: 15,
    textAlign: 'center',
    borderRadius: 3,
    backgroundColor: COLOR.red,
    marginLeft: 5
  },
  inactiveText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.red,
    paddingVertical: 10,
    paddingHorizontal: 15,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: COLOR.smokeLight,
    backgroundColor: 'rgba(255,90,95,0.08)',
    marginLeft: 5
  },
  disabledText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.dark,
    paddingVertical: 10,
    paddingHorizontal: 15,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: COLOR.smokeLight,
    backgroundColor: COLOR.smokeLight,
    marginLeft: 5
  },
  /** * -- Tab Overview-- ***/
  overViewInfo: {
    marginHorizontal: 20
  },
  overViewDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.grey2,
    marginTop: 20
  },
  readText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.red,
    marginVertical: 20
  },
  tableBookingLayout: {
    marginVertical: 20
  },
  tableBookingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  tableBookingBgInfo: {
    backgroundColor: COLOR.smoke,
  },
  tableBookingIcon: {
    fontSize: SIZE.extraLarge,
    color: COLOR.darkLight,
  },
  tableBookingTitle: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.darkLight,
    paddingLeft: 15,
    marginBottom: 5
  },
  tableBookingText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.grey2,
    paddingLeft: 15,
    marginBottom: 3
  },
  tableBookingImg: {
    height: 24,
    width: 24
  },
  /** * -- Tab specialOffers-- ***/
  offerInfo: {
    marginHorizontal: 20,
    marginVertical: 30
  },
  offerTextInfo: {
    marginBottom: 20
  },
  offerTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.darkLight,
    marginBottom: 20
  },
  offerText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.grey2,
    marginBottom: 5
  },
  /* -- Map -- */
  mMap: {
    height: 200,
    width: '100%',
    borderColor: 'rgba(239, 239, 239, 1)',
    borderWidth: 1
  },
  mMapImg: {
    flex: 1
  },
  /* -- location -- */
  locationTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.darkLight,
    marginTop: 30,
    marginBottom: 20,
    paddingLeft: 20
  },
  websiteText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.red,
    paddingLeft: 15
  },
  socialMediaIconDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10
  },
  socialMediaIcon: {
    fontSize: SIZE.compact,
    color:COLOR.light,
    backgroundColor: COLOR.red,
    borderRadius: 3,
    padding: 3,
    marginLeft: 5
  },
  /* -- Review -- */

  reviewYearText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.grey,
    marginBottom: 10
  },
  reviewYearDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.greyDark,
    marginBottom: 20
  },
  reviewBar: {
    flex: 2.5,
    justifyContent: 'center'
  },
  reviewBarItem: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 5
  },
  reviewBarLabel: {
    flex: 1,
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color:  COLOR.darkGrey,
  },
  reviewBarLine: {
    flex: 9
  },
  reviewBarGrey: {
    width: '100%',
    height: 10,
    borderRadius: 10,
    backgroundColor:COLOR.smokeGrey,
    zIndex: 1
  },
  reviewBarActive: {
    position: 'absolute',
    height: 10,
    borderRadius: 10,
    backgroundColor:  COLOR.red,
    zIndex: 2
  },
  reviewStar: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row'
  },
  reviewStartIcon: {
    fontSize: SIZE.compact,
    color: 'orange',
    marginRight: 3
  },
  reviewBtn: {
    backgroundColor: COLOR.dark,
    paddingVertical: 15,
    borderRadius: 5,
    marginHorizontal: 15
  },
  reviewBtnText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color:COLOR.light,
    textAlign: 'center'
  },
  reviewList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20
  },
  reviewListInfo: {
    flex: 1,
    backgroundColor: COLOR.smoke,
    marginRight: 5,
    paddingVertical: 10
  },
  reviewListNum: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: COLOR.dark,
    textAlign: 'center'
  },
  reviewListText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.darkLight,
    textAlign: 'center'
  },
  reviewLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  reviewRatingText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.grey2,
    paddingLeft: 10
  },
  radioDetail: {
    marginTop: 30
  },
  /** * -- Notification -- ***/
  notificationForm: {
    backgroundColor: COLOR.smoke,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  notificationInfo: {
    flexDirection: 'row',
    paddingVertical: 20,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor:COLOR.light,
    paddingHorizontal: 20
  },
  notificationTextDetail: {
    paddingLeft: 15
  },
  notificationImg: {
    height: 56,
    width: 54,
    borderRadius: 3
  },
  notificationText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.greyDark,
  },
  notificationDayDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7
  },
  notificationIconDetail: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dayText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.grey,
    paddingLeft: 10
  },
  notificationLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  notificationDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10
  },
  notificationOverallText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.tiny,
    color: COLOR.dark,
  },
  notificationNumText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.red,
    marginLeft: 5
  },
  notificationDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color:  COLOR.grey,
    marginTop: 10
  },
  /** - - Modal Box - - **/
  myCartToppingInfo: {
    flex: 1
  },
  mBox: {
    height: '80%',
    width: '100%'
  },
  modalDetail: {
    marginVertical: 20
  },
  closeHiddenDesc: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: '1%'
  },
  closeIcon: {
    fontSize: SIZE.compact,
    color:  COLOR.grey,
  },
  modalReviewText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.large,
    color: COLOR.greyDark,
    marginBottom: 10,
    paddingLeft: 20
  },
  modalPriceText: {
    fontFamily: FAMILY.normal,
    fontSize: SIZE.large,
    color: COLOR.greyDark,
    marginBottom: 10,
    paddingRight: 20,
    textAlign: 'right'
  },
  reviewLabel: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color:COLOR.darkGrey,
    paddingLeft: 20,
    marginBottom: 5
  },
  listDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  revDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.smoke,
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  imgName: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.darkGrey,
    flex: 4
  },
  ratingTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: COLOR.darkGrey,
    flex: 4
  },
  iconItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 6
  },
  rateIconClr: {
    fontSize: SIZE.extraLarge,
    color: COLOR.red,
    paddingRight: 5
  },
  rateIcon: {
    fontSize: SIZE.extraLarge,
    color: COLOR.lightGrey,
    paddingRight: 5
  },
  inputText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.darkLight,
    flex: 1,
  },
  inputLabel: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color:COLOR.dark,
    marginBottom: 5
  },
  inputDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.smoke,
    height:100,
    padding: 15,
    borderRadius: 5,
    marginBottom: 30
  },
  inputDetailIcon: {
    fontSize: SIZE.huge,
    color: COLOR.lightGrey,
  },
  modalReviewDetail: {
    paddingHorizontal: 20
  },
  categoryLeftDetails: {
    paddingRight: 15,
    paddingBottom: 10
  },
  categoryLeftImg: {
    height: 250,
    borderRadius: 5,
    backgroundColor: '#CCC'
  },
  categoryLeftImgLayout: {
    height: 195,
    backgroundColor: COLOR.dark,
    opacity: 0.3,
    borderRadius: 5,
    position: 'absolute'
  },
  categoryImgDetail: {
    flexDirection: 'row'
  },
  categoryRightDetails: {
    paddingRight: 15
  },
  categoryRightImgDisplay: {
    width: '100%'
  },
  categoryRightImg: {
    height: 120,
    borderRadius: 5
  },
  categoryRightTopImg: {
    height: 120,
    borderRadius: 5,
    marginBottom: 10
  },
  categoryRightImgLayout: {
    height: 150,
    backgroundColor: COLOR.dark,
    opacity: 0.3,
    borderRadius: 5,
    position: 'absolute'
  },
  categoryIcon: {
    fontSize: SIZE.compact,
    color:  COLOR.dark,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 5,
    padding: 5,
    alignSelf: 'center'
  },
  photoTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: COLOR.dark,
    paddingLeft: 20,
    marginBottom: 20,
    marginTop: 30
  },
  /* --Modal Food-- */
  mNewBox: {
    width: '90%',
    height: '85%',
    borderWidth: 1,
    borderColor: COLOR.smoke,
    borderRadius: 5
  },
  modalClose: {
    backgroundColor: COLOR.dark,
  },
  modalInfo: {
    padding:30
  },
  modalCloseIcon: {
    fontSize: SIZE.huge,
    color:COLOR.default,
    alignSelf: 'flex-end',
    paddingRight: 20,
    paddingVertical: 10
  },
  imgInfo: {
    height: '100%'
  },
  /** * --Menu Tab -- ***/

  menuTabs: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 15
  },
  menuActiveText: {
    flex: 1,

    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.red,
    borderColor:  COLOR.red,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    textAlign: 'center',
    borderRadius: 3,
    backgroundColor: 'rgba(255,90,95,0.16)',
    marginLeft: 5
  },
  menuInactiveText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.red,
    paddingVertical: 10,
    paddingHorizontal: 15,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: COLOR.smokeLight,
    backgroundColor: 'rgba(255,90,95,0.05)',
    marginLeft: 5
  },
  /** * --Menu Content -- ***/
  marginBottomOnMenu: {
    marginBottom: 70
  },
  menuLayout: {
    marginHorizontal: 20,
  },
  menuLable: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: COLOR.dark,
    paddingLeft: 20,
    marginTop: 30
  },
  cartButton: {
    position: 'absolute',
    alignSelf: 'center',
    width: '90%',
    padding: 10,
    bottom: 10,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 10,
    backgroundColor: COLOR.red,
  },
  cartBtnText: {
    fontSize: SIZE.large,
    color: COLOR.light, 
    paddingRight: 15
  },
  menuDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.grey2,
  },
  menuDetail: {
    backgroundColor: COLOR.smoke,
    borderRadius: 5,
    padding: 15,
    paddingBottom: 25,
    marginBottom: 20
  },
  menuName: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.red,
    marginBottom: 20,
    marginTop: 10
  },
  menuInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
    width: '100%'
  },
  menuTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.dark,
    width: '75%'
  },
  menuPrice: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.dark,
    width: '25%',
    textAlign: 'right'
  },
  menuItenDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.grey,
  },
  addProductBtn: {
    zIndex: 1,
    width: 36,
    height: 36,
    borderRadius: 50,
    marginTop: 5,
    marginLeft:'87%',
    marginBottom: -37,
    backgroundColor: COLOR.light
  },
  modalPaper: {
    backgroundColor: '#00000000',
    width: '100%',
    height: 70,
    marginTop: '-15%',
    zIndex:40,
  },
  quantityControlView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    marginBottom: 10,
  },
  quantityControlBtn: {
    flexDirection: 'row',
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  },
  DetailsItemHeader: {
    fontSize: SIZE.compact,
},
row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
},
NameColumnDt: {
    alignItems: 'flex-start',
    width: "50%"
},
QuantityColumnDt: {
    alignItems: 'flex-end',
    width: "7%"
},
PriceColumnDt: {
    alignItems: 'flex-end',
    width: "20%"
},
plateContainer: {
  paddingBottom: 10  
},
extraPlateContainer: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    width: '90%'
},
extraText: {
    color: COLOR.greyLight
},
flexEnd: {
    alignItems: 'flex-end'
},
checkoutColumn: {
    alignItems: 'flex-end',
    width:'37%'
},
buttonColumn: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    backgroundColor: COLOR.red,
    paddingHorizontal: '2%',
    paddingVertical: '1%',
    marginTop: '3%',
    borderRadius: 5
},
alignCenter: {
    width: '100%',
    alignItems: 'center'
},
titleText: {
    fontSize: SIZE.large,
    width: '100%',
    textAlign: 'center'
},
}
