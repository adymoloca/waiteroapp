
import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
  bgShadow: {
    width: '100%',
    minHeight: 50,
    backgroundColor:COLOR.light,
    elevation: 10,
    shadowOffset: {
      width: 15,
      height: 15
    },
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 10
  },
  /** * -- Accordion -- ***/

  accordionTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 169, 104, 0.01)',
    paddingVertical: 15,
    borderColor: COLOR.smokeLight,
    borderBottomWidth: 1,
    paddingHorizontal: 20
  },
  accordionTitle: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.darkLight,
  },
  accordionContent: {
    paddingVertical: 10,
    borderColor: COLOR.smokeLight,
    borderBottomWidth: 1
  },
  customerName: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.darkLight,
    paddingLeft: 20,
    marginBottom: 15
  },
  timeDetail: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  timeInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: COLOR.smokeLight,
    paddingHorizontal: 20
  },
  calendarText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.grey,
    paddingLeft: 10
  },
  qrImgDetail: {
    paddingVertical: 20,
    alignSelf: 'center',
    alignItems: 'center'
  },
  qrImg: {
    height: 100,
    width: 100,
    alignSelf: 'center'
  },
  btnInfo: {
    margin: 20,
  },
  /* - - Modal Box Edit- - */
  modalRate: {
    height: '70%',
    width: '90%',
    borderRadius: 10
  },
  modalDetail: {
    marginVertical: 20
  },
  closeHiddenDesc: {
    alignItems: 'flex-end',
    padding: 20
  },
  imgBg: {
    height: 100,
    width: '100%',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  bookingImg: {
    width: '100%',
    height: 100,
    borderRadius: 5
  },
  bgMain: {
    padding: 20,
  },
  bookingTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.darkLight,
    marginVertical: 20,
    marginBottom: 10
  },
  bookingText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.grey
  },
  bookingNum: {
    flexDirection: 'row',
    marginVertical: 20
  },
  bookingTableInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoBg: {
    paddingVertical: 15,
    backgroundColor:COLOR.light,
  },
  infoBgClr: {
    paddingVertical: 15,
    backgroundColor: COLOR.smoke,
  },
  bookingInfoText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color:  COLOR.darkLight,
    paddingLeft: 20
  },
  priceBtn: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  priceBg: {
    padding: 15,
    backgroundColor: COLOR.smokeLight,
    flexDirection: 'row',
    borderRadius: 5,
    marginTop: 15
  },
  bookingPrice: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.large,
    color: COLOR.darkLight,
    textAlign: 'center'
  },
  currencySymbol: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.darkLight,
    textAlign: 'center'
  },
  paidText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.grey,
    textAlign: 'center',
    marginVertical: 20
  }
}
