import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {

  /* -- Content -- */
  homeContainer: {
    flex: 1
  },
  coverImg: {
    position: 'absolute',
    overflow: 'hidden',
    height: 180,
    width: '100%'
  },
  linearGradient: {
    width: '100%',
    overflow: 'hidden',
    height: 300,
    position: 'absolute'
  },
  homeInfo: {
    width: '100%',
    backgroundColor: COLOR.darkGrey
  },
  navBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 25,
    paddingBottom: 14
  },
  navLeftIcon: {
    position: 'absolute',
    padding: 14,
    left: 25,
    top: 25,
    zIndex: 1,
    borderRadius:50,
    overflow: 'hidden', 
    backgroundColor: COLOR.red,
  },
  navRightIcon: {
    position: 'absolute',
    paddingHorizontal:16,
    paddingVertical: 14,
    right: 25,
    top: 25,
    zIndex: 1,
    borderRadius:50,
    overflow: 'hidden', 
    backgroundColor: COLOR.red,
  },
  navDesc: {
    fontSize: SIZE.higantic,
    color:COLOR.light,
    textAlign: 'center',
    elevation: 20
  },
  searchInputContainer: {
    marginVertical: 15,
    marginHorizontal: 20,
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#fff",
    borderRadius: 5
  },
  tableInfoBg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor:COLOR.light,
    marginHorizontal: 20,
    borderRadius: 5
  },
  tableInfoText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.large,
  },
  tableItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10
  },
  tableInfoHalf: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 0.47,
    padding: 15,
    backgroundColor: COLOR.light,
    borderRadius: 5,
    elevation: 20
  },

  searchBtn: {
    paddingVertical: 9,
    fontSize: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    width:"100%"
  },
  inputFieldWithIcon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBtnText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.large,
    color:COLOR.light,
  },

  /** -FaltList-Offers - **/


  headerTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.light
  },
  headerText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color:COLOR.default
  },
  

  /* Title */
  homeHeader: {
    marginLeft: 20
  },
  
  homeHeaderTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.extraLarge,
    color: COLOR.darkLight,
    paddingVertical: 5
  },
  homeHeaderText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.grey,
    paddingBottom: 5
  },

  /* flatList */
  foodContent: {
  },
  foodDetails: {
    width: 250,
    height: 150,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 12,
    },
    shadowOpacity: 0.9,
    shadowRadius: 16.00,
    overflow: 'hidden',
    elevation: 10,
    
  },
  restaruntImg: {
    width:"100%",
    height: 200,
    borderRadius: 5,
    
  },
  foodInfo: {
    paddingVertical: 10
  },
  imgName: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: COLOR.darkLight,
  },
  iconItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5
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
  foodItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  foodType: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.grey,
  },
  dotLine: {
    marginHorizontal: 10
  },
  tableBg: {
    backgroundColor: COLOR.light,
    padding: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    elevation: 10
  },
  mainList: {
    paddingHorizontal: 20
  },
  editQuantityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    padding: 15,
    backgroundColor: COLOR.light,
  },
  mainBg: {
    backgroundColor: COLOR.red,
  },
  iconBg: {
    backgroundColor: COLOR.red,
    margin: 20,
    alignSelf:'flex-start',
    borderColor:COLOR.default,
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
  },
  /* List */
  foodContainer: {
    justifyContent:"center",
    marginBottom: 20
  },
  imgDisplay: {
    flex: 1,
    alignItems: 'center',
    zIndex: 20,
    shadowColor: '#171717',
    shadowOffset: {width: -10, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginTop: 15
  },
  foodDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  offerBg: {
    top: 90,
    position: 'absolute'
  },
  bookingText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.red,
    marginBottom: 5
  },
  btnItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  btnBg: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: COLOR.red,
  },
  btnBgClr: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: 'rgba(255,90,95,0.1)'
  },
  btnTime: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color:COLOR.light,
  },
  btnTimeClr: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.grey,
  },
  /* --Modal Filter-- */
  mBox: {
    width: '100%',
    height: '60%',
    borderRadius: 5
  },
  closeIcon: {
    alignSelf: 'flex-end',
    paddingRight: 20,
    paddingVertical: 15
  },
  filterInfo: {
    marginHorizontal: 20
  },
  filterText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color:COLOR.darkGrey,
    marginTop: 15
  },
  selectBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    marginVertical: 15
  },
  activeBg: {
    backgroundColor:COLOR.red2,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: COLOR.red,
  },
  inactiveBg: {
    backgroundColor:COLOR.red2,
    borderRadius: 5,
    padding: 10,
    marginRight: 10
  },
  activeText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.red,
  },
  inactiveText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.red,
  },
  applyBtn: {
    flex: 1,
    padding: 15,
    backgroundColor: COLOR.red,
    borderRadius: 5,
    marginVertical: 20
  },
  btnText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color:COLOR.light,
    alignSelf: 'center'
  }
}
