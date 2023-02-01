import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
  signInDetail: {
    marginVertical: 15
  },
  formText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color:  COLOR.grey,
    marginBottom: 5
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
    padding: 10,
    fontFamily: FAMILY.regular,
    fontSize: SIZE.compact,
    color: COLOR.darkLight,
  },
  forgotText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color:  COLOR.grey,
    alignSelf: 'flex-end',
    marginBottom: 10
  },
  signInBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:COLOR.red,
    padding: 15,
    borderRadius: 5
  },
  signInBtnDisabled: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:COLOR.grey,
    padding: 15,
    borderRadius: 5
  },
  signInBtnText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.light,
  },
  signInInfo: {
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
