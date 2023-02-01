import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
  forgotDetail: {
    marginVertical: 15
  },
  formText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color:  COLOR.grey,
    marginBottom: 10
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.smokeLight,
    borderRadius: 5,
    paddingHorizontal: 10
  },
  formInput: {
    flex: 1,
    fontFamily: FAMILY.regular,
    fontSize: SIZE.compact,
    color: COLOR.darkLight,
    padding: 10
  },
  forgotBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.red,
    padding: 15,
    borderRadius: 5
  },
  forgotBtnText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.light,
  },
  forgotInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  accountText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color:  COLOR.grey,
    alignSelf: 'center'
  },
  signUpText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.darkLight,
    marginLeft: 5
  }
}
