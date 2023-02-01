import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
  /* -- Accordion -- */
  accordionTab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: COLOR.smokeLight,
    paddingVertical: 15
  },
  accordionTabActiveText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.darkLight,
  },
  accordionTabText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color:COLOR.darkGrey,
  },
  accordionContent: {
    paddingVertical: 15
  },
  accordionLayout: {
    padding: 10,
    borderRadius: 5
  },
  accordion: {
    width: '100%'
  },
  /** -- Card -- **/
  paymentContent: {
    marginBottom: 20
  },
  paymentInfo: {
    marginTop: 20
  },
  formText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.darkGrey,
    marginBottom: 5
  },
  formRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.smoke,
    padding: 15,
    borderRadius: 5
  },
  formInput: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.greyDark,
    flex: 1,
    padding: 0
  },
  cardDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20
  },
  cardInfoHalf: {
    flex: 7,
    marginRight: 15
  },
  cardInfo: {
    flex: 3
  },
  paymentBtn: {
    marginTop: 20
  },
  /** -- Netbanking -- **/
  contactFormRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  contactForm: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  bankImg: {
    width: 64,
    height: 50
  },
  /* --Modal-- */
  mNewBox: {
    width: '95%',
    height: '50%',
    borderWidth: 1,
    borderColor: COLOR.smoke,
    borderRadius: 5
  },
  closeIcon: {
    alignSelf: 'flex-end',
    paddingRight: 20,
    paddingVertical: 15
  },
  confirmTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: COLOR.greyDark,
    textAlign: 'center',
    marginVertical: 10
  },
  confirmText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.greyLight,
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 16,
    marginHorizontal: 20
  },
  modalInfo: {
    marginVertical: 20
  },
  deliveryImg: {
    width: 90,
    height: 90,
    alignSelf: 'center'
  },
  confirmBtn: {
    marginHorizontal: 20,
    marginVertical: 20
  }

}
